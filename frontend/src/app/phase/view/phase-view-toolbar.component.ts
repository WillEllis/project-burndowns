import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { PhaseViewService } from 'src/app/phase/view/phase-view.service';
import { PhaseService } from 'src/app/phase/phase.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { PhaseDestroyService } from 'src/app/phase/destroy/phase-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-phase-view-toolbar',
  templateUrl: './phase-view-toolbar.component.html',
})
export class PhaseViewToolbarComponent {
  constructor(
    public service: PhaseViewService,
    private phaseService: PhaseService,
    private destroyService: PhaseDestroyService,
    private auditLogService: AuditLogService,
    private confirmService: ConfirmService,
  ) {}

  async doDestroy() {
    const result = await this.confirmService.confirm();

    if (!result) {
      return;
    }

    return this.destroyService.doDestroy(this.record.id);
  }

  get destroyLoading() {
    return this.destroyService.loading;
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

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
