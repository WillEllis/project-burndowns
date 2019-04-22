import { SprintModel } from 'src/app/sprint/sprint-model';

const { fields } = SprintModel;

export default [
  fields.number,
  fields.startDate,
  fields.fastTrack,
  fields.endDate,
  fields.estimatedVelocity,
  fields.actualVelocity,
  fields.status,
  fields.comments,
];
