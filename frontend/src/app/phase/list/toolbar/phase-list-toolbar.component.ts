import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PhaseListService } from 'src/app/phase/list/phase-list.service';
import { PhaseService } from 'src/app/phase/phase.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PhaseDestroyService } from 'src/app/phase/destroy/phase-destroy.service';

@Component({
  selector: 'app-phase-list-toolbar',
  templateUrl: './phase-list-toolbar.component.html',
})
export class PhaseListToolbarComponent {
  constructor(
    public service: PhaseListService,
    private phaseService: PhaseService,
    private destroyService: PhaseDestroyService,
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
    return this.phaseService.hasPermissionToCreate;
  }

  get hasPermissionToDestroy() {
    return this.phaseService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.phaseService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.phaseService.hasPermissionToImport;
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
