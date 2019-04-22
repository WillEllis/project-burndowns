import { Component, OnInit } from '@angular/core';
import { IamListService } from 'src/app/iam/list/iam-list.service';
import { UserModel } from 'src/app/auth/user-model';
import { Roles } from 'src/security/roles';
import { IamService } from 'src/app/iam/iam.service';

@Component({
  selector: 'app-iam-list-table',
  templateUrl: './iam-list-table.component.html',
})
export class IamListTableComponent {
  constructor(
    public service: IamListService,
    public iamService: IamService,
  ) {}

  presenter(row, fieldName) {
    return UserModel.presenter(row, fieldName);
  }

  roleDescriptionOf(roleId) {
    return Roles.descriptionOf(roleId);
  }

  roleLabelOf(roleId) {
    return Roles.labelOf(roleId);
  }

  get hasPermissionToEdit() {
    return this.iamService.hasPermissionToEdit;
  }

  get fields() {
    return UserModel.fields;
  }

  get columns() {
    return [
      '_select',
      this.fields.avatarsIam.name,
      this.fields.email.name,
      this.fields.fullName.name,
      this.fields.roles.name,
      this.fields.disabledAsStatus.name,
      this.fields.createdAt.name,
      '_actions',
    ];
  }
}
