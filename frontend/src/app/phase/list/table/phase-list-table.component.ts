import { Component } from '@angular/core';
import { PhaseListService } from 'src/app/phase/list/phase-list.service';
import { PhaseService } from 'src/app/phase/phase.service';
import { PhaseModel } from 'src/app/phase/phase-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { PhaseDestroyService } from 'src/app/phase/destroy/phase-destroy.service';

@Component({
  selector: 'app-phase-list-table',
  templateUrl: './phase-list-table.component.html',
})
export class PhaseListTableComponent {
  constructor(
    public service: PhaseListService,
    public destroyService: PhaseDestroyService,
    public phaseService: PhaseService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return PhaseModel.presenter(row, fieldName);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.phaseService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.phaseService.hasPermissionToDestroy;
  }

  get fields() {
    return PhaseModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.id.name,
      this.fields.name.name,
      this.fields.createdAt.name,
      '_actions',
    ];
  }
}
