import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { SprintViewService } from 'src/app/sprint/view/sprint-view.service';
import { SprintService } from 'src/app/sprint/sprint.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SprintDestroyService } from 'src/app/sprint/destroy/sprint-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-sprint-view-toolbar',
  templateUrl: './sprint-view-toolbar.component.html',
})
export class SprintViewToolbarComponent {
  constructor(
    public service: SprintViewService,
    private sprintService: SprintService,
    private destroyService: SprintDestroyService,
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
    return this.sprintService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.sprintService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.sprintService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
