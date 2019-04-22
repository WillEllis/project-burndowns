import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SprintModel } from 'src/app/sprint/sprint-model';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { i18n } from 'src/i18n';
import { SprintFormService } from 'src/app/sprint/form/sprint-form.service';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
})
export class SprintFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private service: SprintFormService,
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
    return SprintModel.fields;
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
    [i18n('entities.sprint.menu'), '/sprint'],
    [
      this.isEditing
        ? i18n('entities.sprint.edit.title')
        : i18n('entities.sprint.new.title'),
    ],
  ];

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.id,
        this.fields.number,
        this.fields.startDate,
        this.fields.fastTrack,
        this.fields.endDate,
        this.fields.estimatedVelocity,
        this.fields.actualVelocity,
        this.fields.status,
        this.fields.comments,
      ],
      this.formBuilder,
    );
  }
}
