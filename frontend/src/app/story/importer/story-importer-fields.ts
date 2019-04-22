import { StoryModel } from 'src/app/story/story-model';

const { fields } = StoryModel;

export default [
  fields.backlogPriority,
  fields.name,
  fields.description,
  fields.effort,
  fields.phase,
  fields.dateAdded,
  fields.status,
  fields.dateFinished,
];
