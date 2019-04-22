import { PhaseModel } from 'src/app/phase/phase-model';

const { fields } = PhaseModel;

export default [
  fields.id,
  fields.name,
  fields.stories,
  fields.createdAt,
  fields.updatedAt,
];
