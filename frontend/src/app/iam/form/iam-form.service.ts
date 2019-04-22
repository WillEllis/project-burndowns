import { Injectable } from '@angular/core';
import { IamApi } from 'src/app/iam/iam.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IamFormService {
  findLoading = false;
  saveLoading = false;
  user = null;

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router,
    private snackbar: Snackbar,
  ) {}

  doNew() {
    this.findLoading = false;
    this.saveLoading = false;
    this.user = null;
  }

  async doFind(id) {
    try {
      this.user = null;
      this.findLoading = true;

      this.user = await IamApi.find(id);
      this.findLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.user = null;
      this.findLoading = false;

      this.router.navigate(['/iam']);
    }
  }

  async doAdd(values) {
    try {
      this.saveLoading = true;
      await IamApi.create(values);
      this.saveLoading = false;
      this.snackbar.success(i18n('iam.doAddSuccess'));
      this.router.navigate(['/iam']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(values) {
    try {
      this.saveLoading = true;
      await IamApi.edit(values);
      this.saveLoading = false;
      const currentUser = this.authService.currentUser;

      if (currentUser.id === values.id) {
        await this.authService.doRefreshCurrentUser();
      }

      this.snackbar.success(i18n('iam.doUpdateSuccess'));
      this.router.navigate(['/iam']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
