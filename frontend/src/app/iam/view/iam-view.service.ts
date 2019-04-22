import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IamApi } from 'src/app/iam/iam.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class IamViewService {
  loading = false;
  user = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  async doFind(id) {
    try {
      this.user = null;
      this.loading = true;

      this.user = await IamApi.find(id);
      this.loading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.user = null;
      this.loading = false;

      this.router.navigate(['/iam']);
    }
  }

  async doToggleStatus() {
    try {
      const user = this.user;
      this.loading = true;
      const isEnabling = !!user.disabled;

      if (isEnabling) {
        await IamApi.enable([user.id]);
      } else {
        await IamApi.disable([user.id]);
      }

      this.loading = false;

      if (isEnabling) {
        this.snackbar.success(i18n('iam.doEnableSuccess'));
      } else {
        this.snackbar.success(i18n('iam.doDisableSuccess'));
      }

      await this.doFind(user.id);
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
