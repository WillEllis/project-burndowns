import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';
import { ProjectField } from 'src/app/project/project-field';

function label(name) {
  return i18n(`entities.complexityChange.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  project: ProjectField.relationToOne('project', label('project'), {
    "required": true
  }),
  date: new DateField('date', label('date'), {
    "required": true
  }),
  effortChange: new IntegerField('effortChange', label('effortChange'), {
    "required": true
  }),
  reason: new StringField('reason', label('reason'), {
    "required": true,
    "min": 1,
    "max": 255
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  dateRange: new DateRangeField(
    'dateRange',
    label('dateRange'),
  ),
  effortChangeRange: new IntegerRangeField(
    'effortChangeRange',
    label('effortChangeRange'),
  ),
};

export class ComplexityChangeModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
