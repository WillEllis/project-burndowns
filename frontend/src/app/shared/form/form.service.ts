import { ErrorService } from 'src/app/shared/error/error.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

export class FormService {
  findLoading = false;
  saveLoading = false;
  record = null;

  findFn = null;
  createFn = null;
  updateFn = null;
  errorService: ErrorService;
  router: Router;
  snackbar: Snackbar;
  redirectTo: any;
  createSuccessMessageI18nKey: string;
  updateSuccessMessageI18nKey: string;

  constructor(
    errorService: ErrorService,
    router: Router,
    snackbar: Snackbar,
    findFn,
    createFn,
    updateFn,
    redirectTo,
    createSuccessMessageI18nKey,
    updateSuccessMessageI18nKey,
  ) {
    this.errorService = errorService;
    this.snackbar = snackbar;
    this.router = router;
    this.findFn = findFn;
    this.createFn = createFn;
    this.updateFn = updateFn;
    this.redirectTo = redirectTo;
    this.createSuccessMessageI18nKey = createSuccessMessageI18nKey;
    this.updateSuccessMessageI18nKey = updateSuccessMessageI18nKey;
  }

  doNew() {
    this.findLoading = false;
    this.saveLoading = false;
    this.record = null;
  }

  async doFind(id) {
    try {
      this.record = null;
      this.findLoading = true;

      this.record = await this.findFn(id);
      this.findLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.findLoading = true;
      this.router.navigate(this.redirectTo);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await this.createFn(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n(this.createSuccessMessageI18nKey),
      );

      this.router.navigate(this.redirectTo);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await this.updateFn(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n(this.updateSuccessMessageI18nKey),
      );

      this.router.navigate(this.redirectTo);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
