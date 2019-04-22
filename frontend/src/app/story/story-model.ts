import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import DateField from 'src/app/shared/fields/date-field';
import DateRangeField from 'src/app/shared/fields/date-range-field';
import { PhaseField } from 'src/app/phase/phase-field';

function label(name) {
  return i18n(`entities.story.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.story.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  backlogPriority: new IntegerField('backlogPriority', label('backlogPriority'), {
    "required": true,
    "min": 1
  }),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 2,
    "max": 255
  }),
  description: new StringField('description', label('description'), {
    "max": 21845
  }),
  effort: new IntegerField('effort', label('effort'), {
    "min": 1,
    "max": 100
  }),
  phase: PhaseField.relationToOne('phase', label('phase'), {}),
  dateAdded: new DateField('dateAdded', label('dateAdded'), {
    "required": true
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'pending', label: enumeratorLabel('status', 'pending') },
    { id: 'in_progress', label: enumeratorLabel('status', 'in_progress') },
    { id: 'complete', label: enumeratorLabel('status', 'complete') },
  ],{
    "required": true
  }),
  dateFinished: new DateField('dateFinished', label('dateFinished'), {}),
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
  backlogPriorityRange: new IntegerRangeField(
    'backlogPriorityRange',
    label('backlogPriorityRange'),
  ),
  effortRange: new IntegerRangeField(
    'effortRange',
    label('effortRange'),
  ),
  dateAddedRange: new DateRangeField(
    'dateAddedRange',
    label('dateAddedRange'),
  ),
  dateFinishedRange: new DateRangeField(
    'dateFinishedRange',
    label('dateFinishedRange'),
  ),
};

export class StoryModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
