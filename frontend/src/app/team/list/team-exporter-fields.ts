import { TeamModel } from 'src/app/team/team-model';

const { fields } = TeamModel;

export default [
  fields.id,
  fields.name,
  fields.estVelocity,
  fields.createdAt,
  fields.updatedAt,
];
