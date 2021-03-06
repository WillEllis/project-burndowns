import { Component } from '@angular/core';
import { ProjectListService } from 'src/app/project/list/project-list.service';
import { ProjectService } from 'src/app/project/project.service';
import { ProjectModel } from 'src/app/project/project-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProjectDestroyService } from 'src/app/project/destroy/project-destroy.service';

@Component({
  selector: 'app-project-list-table',
  templateUrl: './project-list-table.component.html',
})
export class ProjectListTableComponent {
  constructor(
    public service: ProjectListService,
    public destroyService: ProjectDestroyService,
    public projectService: ProjectService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ProjectModel.presenter(row, fieldName);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.projectService.hasPermissionToEdit;
  }

  get fields() {
    return ProjectModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.name.name,
      this.fields.initialEstimate.name,
      '_actions',
    ];
  }
}
