import { Component } from '@angular/core';
import { SprintListService } from 'src/app/sprint/list/sprint-list.service';
import { SprintService } from 'src/app/sprint/sprint.service';
import { SprintModel } from 'src/app/sprint/sprint-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { SprintDestroyService } from 'src/app/sprint/destroy/sprint-destroy.service';

@Component({
  selector: 'app-sprint-list-table',
  templateUrl: './sprint-list-table.component.html',
})
export class SprintListTableComponent {
  constructor(
    public service: SprintListService,
    public destroyService: SprintDestroyService,
    public sprintService: SprintService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return SprintModel.presenter(row, fieldName);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.sprintService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.sprintService.hasPermissionToDestroy;
  }

  get fields() {
    return SprintModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.number.name,
      this.fields.startDate.name,
      this.fields.fastTrack.name,
      this.fields.estimatedVelocity.name,
      this.fields.actualVelocity.name,
      this.fields.status.name,
      this.fields.createdAt.name,
      '_actions',
    ];
  }
}
