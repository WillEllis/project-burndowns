import { ProjectModel } from 'src/app/project/project-model';

const { fields } = ProjectModel;

export default [
  fields.id,
  fields.name,
  fields.stories,
  fields.initialEstimate,
  fields.createdAt,
  fields.updatedAt,
];
