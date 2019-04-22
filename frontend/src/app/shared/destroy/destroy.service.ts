import { ErrorService } from 'src/app/shared/error/error.service';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';

export class DestroyService {
  loading = false;

  destroyAllFn = null;
  createFn = null;
  updateFn = null;
  errorService: ErrorService;
  router: Router;
  snackbar: Snackbar;
  redirectTo: any;
  destroySuccessMessageI18nKey: string;
  destroyAllSuccessMessageI18nKey: string;
  paginationService: PaginationService;

  constructor(
    errorService: ErrorService,
    router: Router,
    snackbar: Snackbar,
    destroyAllFn,
    destroySuccessMessageI18nKey,
    destroyAllSuccessMessageI18nKey,
    redirectTo,
    paginationService?: PaginationService,
  ) {
    this.errorService = errorService;
    this.snackbar = snackbar;
    this.router = router;

    this.destroyAllFn = destroyAllFn;
    this.destroySuccessMessageI18nKey = destroySuccessMessageI18nKey;
    this.destroyAllSuccessMessageI18nKey = destroyAllSuccessMessageI18nKey;
    this.redirectTo = redirectTo;
    this.paginationService = paginationService;
  }

  async doDestroy(id) {
    try {
      this.loading = true;
      await this.destroyAllFn([id]);
      this.loading = false;
      this.snackbar.success(
        i18n(this.destroySuccessMessageI18nKey),
      );

      this.router.navigate(this.redirectTo);

      if (this.paginationService) {
        await this.paginationService.doFetch(
          this.paginationService.filter,
        );
      }
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await this.destroyAllFn(ids);
      this.loading = false;

      if (this.paginationService) {
        this.paginationService.doResetSelectedKeys();
      }

      this.snackbar.success(
        i18n(this.destroyAllSuccessMessageI18nKey),
      );

      this.router.navigate(this.redirectTo);

      if (this.paginationService) {
        return this.paginationService.doFetch(
          this.paginationService.filter,
        );
      }
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
