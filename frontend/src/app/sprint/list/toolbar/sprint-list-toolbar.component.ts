import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { SprintListService } from 'src/app/sprint/list/sprint-list.service';
import { SprintService } from 'src/app/sprint/sprint.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { SprintDestroyService } from 'src/app/sprint/destroy/sprint-destroy.service';

@Component({
  selector: 'app-sprint-list-toolbar',
  templateUrl: './sprint-list-toolbar.component.html',
})
export class SprintListToolbarComponent {
  constructor(
    public service: SprintListService,
    private sprintService: SprintService,
    private destroyService: SprintDestroyService,
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
    return this.sprintService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.sprintService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.sprintService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.sprintService.hasPermissionToImport;
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
