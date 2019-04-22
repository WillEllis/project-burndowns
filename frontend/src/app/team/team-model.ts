import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import ImagesField from 'src/app/shared/fields/images-field';

function label(name) {
  return i18n(`entities.team.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  image: new ImagesField('image', label('image'), 'team/image',{
    "size": 5000000
  }),
  name: new StringField('name', label('name'), {
    "required": true,
    "min": 2,
    "max": 255
  }),
  estVelocity: new IntegerField('estVelocity', label('estVelocity'), {
    "min": 0,
    "max": 500
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
  estVelocityRange: new IntegerRangeField(
    'estVelocityRange',
    label('estVelocityRange'),
  ),
};

export class TeamModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
