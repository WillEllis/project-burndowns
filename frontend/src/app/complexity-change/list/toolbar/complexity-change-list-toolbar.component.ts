import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { ComplexityChangeListService } from 'src/app/complexity-change/list/complexity-change-list.service';
import { ComplexityChangeService } from 'src/app/complexity-change/complexity-change.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ComplexityChangeDestroyService } from 'src/app/complexity-change/destroy/complexity-change-destroy.service';

@Component({
  selector: 'app-complexity-change-list-toolbar',
  templateUrl: './complexity-change-list-toolbar.component.html',
})
export class ComplexityChangeListToolbarComponent {
  constructor(
    public service: ComplexityChangeListService,
    private complexityChangeService: ComplexityChangeService,
    private destroyService: ComplexityChangeDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  get destroyButtonDisabled() {
    return (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading ||
      this.destroyService.loading
    );
  }

  get destroyButtonTooltip() {
    if (
      this.service.selectedKeys.isEmpty() ||
      this.service.loading
    ) {
      return i18n('common.mustSelectARow');
    }
  }

  async doDestroyAllSelected() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroyAll(
      this.service.selectedKeys.selected,
    );
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get hasPermissionToCreate() {
    return this.complexityChangeService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.complexityChangeService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.complexityChangeService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.complexityChangeService.hasPermissionToImport;
  }

  doExport() {
    return this.service.doExport();
  }

  get exportButtonDisabled() {
    return (
      !this.service.hasRows ||
      this.service.loading ||
      this.service.exportLoading
    );
  }

  get exportButtonTooltip() {
    if (!this.service.hasRows || this.service.loading) {
      return i18n('common.noDataToExport');
    }
  }
}
