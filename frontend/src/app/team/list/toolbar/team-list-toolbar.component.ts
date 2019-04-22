import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { TeamListService } from 'src/app/team/list/team-list.service';
import { TeamService } from 'src/app/team/team.service';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TeamDestroyService } from 'src/app/team/destroy/team-destroy.service';

@Component({
  selector: 'app-team-list-toolbar',
  templateUrl: './team-list-toolbar.component.html',
})
export class TeamListToolbarComponent {
  constructor(
    public service: TeamListService,
    private teamService: TeamService,
    private destroyService: TeamDestroyService,
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
    return this.teamService.hasPermissionToCreate;
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
