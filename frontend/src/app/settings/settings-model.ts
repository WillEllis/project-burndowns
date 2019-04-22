import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import { i18n } from 'src/i18n';
import { GenericModel } from 'src/app/shared/model/generic-model';

const primaryColors = [
  'amber',
  'blue',
  'cyan',
  'deep_orange',
  'deep_purple',
  'green',
  'indigo',
  'light_blue',
  'light_green',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
  'grey',
  'blue_grey',
  'brown',
].map((color) => ({
  id: color,
  label: i18n(`settings.colors.${color}`),
}));

const secondaryColors = [
  'amber',
  'blue',
  'cyan',
  'deep_orange',
  'deep_purple',
  'green',
  'indigo',
  'light_blue',
  'light_green',
  'lime',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'yellow',
].map((color) => ({
  id: color,
  label: i18n(`settings.colors.${color}`),
}));

function label(name) {
  return i18n(`settings.fields.${name}`);
}

const fields = {
  primaryColor: new EnumeratorField(
    'primaryColor',
    label('primaryColor'),
    primaryColors,
  ),
  secondaryColor: new EnumeratorField(
    'secondaryColor',
    label('secondaryColor'),
    secondaryColors,
  ),
};

export class SettingsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
