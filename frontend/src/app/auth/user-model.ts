import StringField from 'src/app/shared/fields/string-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import ImagesField from 'src/app/shared/fields/images-field';
import BooleanField from 'src/app/shared/fields/boolean-field';
import StringArrayField from 'src/app/shared/fields/string-array-field';
import GenericField from 'src/app/shared/fields/generic-field';
import * as yup from 'yup';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import { Roles } from 'src/security/roles';
import { i18n } from 'src/i18n';
import { GenericModel } from 'src/app/shared/model/generic-model';

class RolesField extends StringArrayField {
  options = Roles.selectOptions;

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((values) =>
        values
          ? values
              .map((value) => Roles.labelOf(value))
              .join(' ')
          : null,
      );
  }
}

class EmailsField extends StringArrayField {
  forForm() {
    let yupChain = yup
      .array()
      .label(this.label)
      .of(
        yup
          .string()
          .email(i18n('user.validations.email'))
          .label(i18n('user.fields.email'))
          .max(255)
          .required(),
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}

function label(name) {
  return i18n(`user.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  firstName: new StringField(
    'firstName',
    label('firstName'),
    {
      max: 80,
    },
  ),
  authenticationUid: new StringField(
    'authenticationUid',
    label('authenticationUid'),
  ),
  lastName: new StringField('lastName', label('lastName'), {
    max: 175,
  }),
  password: new StringField('password', label('password'), {
    required: true,
  }),
  fullName: new StringField('fullName', label('fullName')),
  email: new StringField('email', label('email'), {
    required: true,
    max: 255,
  }),
  role: new EnumeratorField(
    'role',
    label('role'),
    Roles.selectOptions,
  ),
  rememberMe: new BooleanField(
    'rememberMe',
    label('rememberMe'),
  ),
  disabledAsStatus: new BooleanField(
    'disabled',
    label('status'),
    {
      noLabel: i18n('user.enabled'),
      yesLabel: i18n('user.disabled'),
    },
  ),
  disabled: new BooleanField(
    'disabled',
    label('disabled'),
    {
      noLabel: i18n('user.enabled'),
      yesLabel: i18n('user.disabled'),
    },
  ),
  phoneNumber: new StringField(
    'phoneNumber',
    label('phoneNumber'),
    {
      matches: /^[0-9]/,
      max: 24,
    },
  ),
  avatarsIam: new ImagesField(
    'avatars',
    label('avatars'),
    'user/avatars/iam',
    { max: 1 },
  ),
  avatarsProfile: new ImagesField(
    'avatars',
    label('avatars'),
    (id) => `user/avatars/profile/${id}`,
    { max: 1 },
  ),
  emails: new EmailsField('emails', label('emails'), {
    required: true,
  }),
  rolesRequired: new RolesField('roles', label('roles'), {
    required: true,
  }),
  roles: new RolesField('roles', label('roles')),
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
  roleUser: new GenericField('roleUser', label('roleUser')),
  status: new EnumeratorField('status', label('status'), [
    {
      id: 'enabled',
      label: i18n('user.enabled'),
    },
    {
      id: 'disabled',
      label: i18n('user.disabled'),
    },
  ]),
};

export class UserModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
