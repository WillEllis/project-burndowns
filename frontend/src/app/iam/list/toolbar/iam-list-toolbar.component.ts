import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { IamListService } from 'src/app/iam/list/iam-list.service';
import { IamService } from 'src/app/iam/iam.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';

@Component({
  selector: 'app-iam-list-toolbar',
  templateUrl: './iam-list-toolbar.component.html',
})
export class IamListToolbarComponent {
  constructor(
    private service: IamListService,
    private iamService: IamService,
    private auditLogService: AuditLogService,
  ) {}

  doExport() {
    return this.service.doExport();
  }

  doRemoveAllSelected() {
    return this.service.doRemoveAllSelected();
  }

  doDisableAllSelected() {
    return this.service.doDisableAllSelected();
  }

  doEnableAllSelected() {
    return this.service.doEnableAllSelected();
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.iamService.hasPermissionToCreate;
  }

  get hasPermissionToEdit() {
    return this.iamService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.iamService.hasPermissionToImport;
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows) {
      return i18n('common.noDataToExport');
    }
  }

  get removeButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    );
  }

  get removeButtonTooltip() {
    if (this.service.selectedKeys.isEmpty()) {
      return i18n('common.mustSelectARow');
    }
  }

  get enableButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    );
  }

  get enableButtonTooltip() {
    if (this.service.selectedKeys.isEmpty()) {
      return i18n('common.mustSelectARow');
    }
  }

  get disableButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    );
  }

  get disableButtonTooltip() {
    if (this.service.selectedKeys.isEmpty()) {
      return i18n('common.mustSelectARow');
    }
  }
}
