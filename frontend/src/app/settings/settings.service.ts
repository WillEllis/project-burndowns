import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import SettingsApi from 'src/app/settings/settings-api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  findLoading = false;
  saveLoading = false;
  settings = null;

  constructor(
    private router: Router,
    private snackbar: Snackbar,
    private errorService: ErrorService,
    private authService: AuthService,
  ) {}

  get hasPermissionToEdit() {
    return this.authService.hasPermission(
      Permissions.values.settingsEdit,
    );
  }

  async doFind() {
    try {
      this.settings = null;
      this.findLoading = true;

      this.settings = await SettingsApi.find();
      this.findLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.findLoading = false;
      this.router.navigate(['/']);
    }
  }

  async doSave(values) {
    try {
      this.saveLoading = true;
      await SettingsApi.save(values);
      this.saveLoading = false;

      const secondsForReload = 3;

      this.snackbar.success(
        i18n('settings.save.success', secondsForReload),
      );

      /**
       * Theme change happens at boot time.
       * So to take effect the page must be reloaded
       */
      setTimeout(
        () => window.location.reload(),
        secondsForReload * 1000,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
