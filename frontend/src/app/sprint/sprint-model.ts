import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import BooleanField from 'src/app/shared/fields/boolean-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';

function label(name) {
  return i18n(`entities.sprint.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.sprint.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  number: new IntegerField('number', label('number'), {
    "required": true,
    "min": 1
  }),
  startDate: new DateField('startDate', label('startDate'), {
    "required": true
  }),
  fastTrack: new BooleanField('fastTrack', label('fastTrack')),
  endDate: new DateField('endDate', label('endDate'), {}),
  estimatedVelocity: new IntegerField('estimatedVelocity', label('estimatedVelocity'), {
    "required": true,
    "min": 0
  }),
  actualVelocity: new IntegerField('actualVelocity', label('actualVelocity'), {
    "min": 0
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'hit', label: enumeratorLabel('status', 'hit') },
    { id: 'missed', label: enumeratorLabel('status', 'missed') },
  ],{}),
  comments: new StringField('comments', label('comments'), {
    "min": 0,
    "max": 21845
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
  numberRange: new IntegerRangeField(
    'numberRange',
    label('numberRange'),
  ),
  startDateRange: new DateRangeField(
    'startDateRange',
    label('startDateRange'),
  ),
  endDateRange: new DateRangeField(
    'endDateRange',
    label('endDateRange'),
  ),
  estimatedVelocityRange: new IntegerRangeField(
    'estimatedVelocityRange',
    label('estimatedVelocityRange'),
  ),
  actualVelocityRange: new IntegerRangeField(
    'actualVelocityRange',
    label('actualVelocityRange'),
  ),
};

export class SprintModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
