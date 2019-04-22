import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/auth/user-model';
import { IamFormService } from 'src/app/iam/form/iam-form.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-iam-new-form',
  templateUrl: './iam-new-form.component.html',
})
export class IamNewFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private service: IamFormService,
    private formBuilder: FormBuilder,
  ) {}

  async ngOnInit() {
    this.service.doNew();
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return UserModel.fields;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);
    return this.service.doAdd(values);
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm();
  }

  get isUniqueEmail() {
    return (
      !this.form.value ||
      !this.form.value.emails ||
      this.form.value.emails.length <= 1
    );
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('iam.menu'), '/iam'],
    [i18n('iam.new.title')],
  ];

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.emails,
        this.fields.firstName,
        this.fields.lastName,
        this.fields.phoneNumber,
        this.fields.avatarsIam,
        this.fields.rolesRequired,
      ],
      this.formBuilder,
    );
  }
}
