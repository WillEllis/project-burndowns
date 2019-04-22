import { Injectable } from '@angular/core';
import { IamApi } from 'src/app/iam/iam.api';
import iamExporterFields from 'src/app/iam/list/iam-exporter-fields';
import { ErrorService } from 'src/app/shared/error/error.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class IamListService extends PaginationService {
  constructor(
    errorService: ErrorService,
    private snackbar: Snackbar,
  ) {
    super(
      IamApi.fetchUsers,
      iamExporterFields,
      i18n('iam.users.exporterFileName'),
      false,
      errorService,
    );
  }

  async doDisableAllSelected() {
    try {
      const selectedRows = this.selectedRows;

      this.rows = [];
      this.count = 0;
      this.loading = true;

      await IamApi.disable(
        selectedRows.map((user) => user.id),
      );

      this.doResetSelectedKeys();

      this.snackbar.success(
        i18n('iam.doDisableAllSuccess'),
      );
      this.doFetch(this.filter);
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
      this.doFetch(this.filter);
    }
  }

  async doEnableAllSelected() {
    try {
      const selectedRows = this.selectedRows;

      this.loading = true;
      this.rows = [];
      this.count = 0;

      await IamApi.enable(
        selectedRows.map((user) => user.id),
      );

      this.doResetSelectedKeys();

      this.snackbar.success(i18n('iam.doEnableAllSuccess'));
      this.doFetch(this.filter);
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
      this.doFetch(this.filter);
    }
  }

  async doRemoveAllSelected() {
    try {
      const selectedRows = this.selectedRows;

      this.loading = true;
      this.rows = [];
      this.count = 0;

      await IamApi.remove(
        selectedRows.map((row) => row.email),
        [],
        true,
      );

      this.doResetSelectedKeys();

      this.snackbar.success(
        i18n('iam.users.doRemoveAllSelectedSuccess'),
      );
      this.doFetch(this.filter);
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
      this.doFetch(this.filter);
    }
  }
}
