import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamModel } from 'src/app/team/team-model';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { i18n } from 'src/i18n';
import { TeamFormService } from 'src/app/team/form/team-form.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
})
export class TeamFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private service: TeamFormService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    if (this.isEditing) {
      await this.service.doFind(
        this.route.snapshot.paramMap.get('id'),
      );
    } else {
      this.service.doNew();
    }

    this.buildSchema();
    this.buildForm();
  }

  get isEditing() {
    return this.route.snapshot.paramMap.has('id');
  }

  get fields() {
    return TeamModel.fields;
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

    const { id, ...values } = this.schema.cast(
      this.form.value,
    );

    if (this.isEditing) {
      return this.service.doUpdate(id, values);
    } else {
      return this.service.doCreate(values);
    }
  }

  get record() {
    return this.service.record;
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(this.service.record);
  }

  breadcrumb = [
    [i18n('home.menu'), '/'],
    [i18n('entities.team.menu'), '/team'],
    [
      this.isEditing
        ? i18n('entities.team.edit.title')
        : i18n('entities.team.new.title'),
    ],
  ];

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.id,
        this.fields.image,
        this.fields.name,
        this.fields.estVelocity,
      ],
      this.formBuilder,
    );
  }
}
