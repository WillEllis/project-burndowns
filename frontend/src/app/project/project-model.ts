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
  return i18n(`entities.project.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 1,
    "max": 255
  }),
  stories: StoryField.relationToMany('stories', label('stories'), {
    "min": 1
  }),
  initialEstimate: new IntegerField('initialEstimate', label('initialEstimate'), {
    "required": true,
    "min": 0
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
  initialEstimateRange: new IntegerRangeField(
    'initialEstimateRange',
    label('initialEstimateRange'),
  ),
};

export class ProjectModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
