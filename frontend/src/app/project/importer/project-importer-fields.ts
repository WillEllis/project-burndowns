import { ProjectModel } from 'src/app/project/project-model';

const { fields } = ProjectModel;

export default [
  fields.name,
  fields.stories,
  fields.initialEstimate,
];
