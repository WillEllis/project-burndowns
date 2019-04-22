import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { StoryField } from 'src/app/story/story-field';

function label(name) {
  return i18n(`entities.phase.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  order: new IntegerField('order', label('order'), {
    "required": true,
    "min": 1
  }),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  stories: StoryField.relationToMany('stories', label('stories'), {}),
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
  orderRange: new IntegerRangeField(
    'orderRange',
    label('orderRange'),
  ),
};

export class PhaseModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
