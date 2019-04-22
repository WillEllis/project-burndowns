import { Component } from '@angular/core';
import { TeamListService } from 'src/app/team/list/team-list.service';
import { TeamService } from 'src/app/team/team.service';
import { TeamModel } from 'src/app/team/team-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TeamDestroyService } from 'src/app/team/destroy/team-destroy.service';

@Component({
  selector: 'app-team-list-table',
  templateUrl: './team-list-table.component.html',
})
export class TeamListTableComponent {
  constructor(
    public service: TeamListService,
    public destroyService: TeamDestroyService,
    public teamService: TeamService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return TeamModel.presenter(row, fieldName);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.teamService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.teamService.hasPermissionToDestroy;
  }

  get fields() {
    return TeamModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.image.name,
      this.fields.name.name,
      '_actions',
    ];
  }
}
