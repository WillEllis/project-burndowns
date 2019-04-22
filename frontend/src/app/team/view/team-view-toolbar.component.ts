import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TeamViewService } from 'src/app/team/view/team-view.service';
import { TeamService } from 'src/app/team/team.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { TeamDestroyService } from 'src/app/team/destroy/team-destroy.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';

@Component({
  selector: 'app-team-view-toolbar',
  templateUrl: './team-view-toolbar.component.html',
})
export class TeamViewToolbarComponent {
  constructor(
    public service: TeamViewService,
    private teamService: TeamService,
    private destroyService: TeamDestroyService,
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
    return this.teamService.hasPermissionToDestroy;
  }

  get hasPermissionToEdit() {
    return this.teamService.hasPermissionToEdit;
  }

  get hasPermissionToImport() {
    return this.teamService.hasPermissionToImport;
  }

  get hasPermissionToAuditLogs() {
    return this.auditLogService.hasPermissionToRead;
  }

  get record() {
    return this.service.record;
  }
}
