import { ComplexityChangeModel } from 'src/app/complexity-change/complexity-change-model';

const { fields } = ComplexityChangeModel;

export default [
  fields.id,
  fields.project,
  fields.date,
  fields.effortChange,
  fields.reason,
  fields.createdAt,
  fields.updatedAt,
];
