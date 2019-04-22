import { UserModel } from 'src/app/auth/user-model';

const { fields } = UserModel;

export default [
  fields.email,
  fields.firstName,
  fields.lastName,
  fields.phoneNumber,
  fields.avatarsIam,
  fields.roles,
];
