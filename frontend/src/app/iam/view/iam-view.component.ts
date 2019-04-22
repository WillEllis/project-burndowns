import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/auth/user-model';
import { IamViewService } from 'src/app/iam/view/iam-view.service';
import { i18n } from 'src/i18n';
import { Roles } from 'src/security/roles';

@Component({
  selector: 'app-iam-view',
  templateUrl: './iam-view.component.html',
})
export class IamViewComponent implements OnInit {
  constructor(
    private service: IamViewService,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return UserModel.presenter(row, fieldName);
  }

  get fields() {
    return UserModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.user;
  }

  roleDescriptionOf(roleId) {
    return Roles.descriptionOf(roleId);
  }

  roleLabelOf(roleId) {
    return Roles.labelOf(roleId);
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('iam.menu'), '/iam'],
    [i18n('iam.view.title')],
  ];
}
