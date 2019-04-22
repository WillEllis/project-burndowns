import { Component } from '@angular/core';
import { ComplexityChangeListService } from 'src/app/complexity-change/list/complexity-change-list.service';
import { ComplexityChangeService } from 'src/app/complexity-change/complexity-change.service';
import { ComplexityChangeModel } from 'src/app/complexity-change/complexity-change-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ComplexityChangeDestroyService } from 'src/app/complexity-change/destroy/complexity-change-destroy.service';

@Component({
  selector: 'app-complexity-change-list-table',
  templateUrl: './complexity-change-list-table.component.html',
})
export class ComplexityChangeListTableComponent {
  constructor(
    public service: ComplexityChangeListService,
    public destroyService: ComplexityChangeDestroyService,
    public complexityChangeService: ComplexityChangeService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return ComplexityChangeModel.presenter(row, fieldName);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.complexityChangeService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.complexityChangeService.hasPermissionToDestroy;
  }

  get fields() {
    return ComplexityChangeModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.project.name,
      this.fields.date.name,
      this.fields.effortChange.name,
      this.fields.reason.name,
      this.fields.createdAt.name,
      '_actions',
    ];
  }
}
