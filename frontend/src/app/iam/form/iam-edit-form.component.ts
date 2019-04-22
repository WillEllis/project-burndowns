import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/auth/user-model';
import { IamFormService } from 'src/app/iam/form/iam-form.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { i18n } from 'src/i18n';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iam-edit-form',
  templateUrl: './iam-edit-form.component.html',
})
export class IamEditFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private service: IamFormService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return UserModel.fields;
  }

  get findLoading() {
    return this.service.findLoading;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);

    // Email is not needed for update
    delete values.email;
    return this.service.doUpdate(values);
  }

  get user() {
    return this.service.user;
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(this.service.user);
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('iam.menu'), '/iam'],
    [i18n('iam.edit.title')],
  ];

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.id,
        this.fields.email,
        this.fields.firstName,
        this.fields.lastName,
        this.fields.phoneNumber,
        this.fields.avatarsIam,
        this.fields.roles,
      ],
      this.formBuilder,
    );
  }
}
