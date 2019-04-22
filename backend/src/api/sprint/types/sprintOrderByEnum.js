const schema = `
  enum SprintOrderByEnum {
    id_ASC
    id_DESC
    number_ASC
    number_DESC
    startDate_ASC
    startDate_DESC
    fastTrack_ASC
    fastTrack_DESC
    estimatedVelocity_ASC
    estimatedVelocity_DESC
    actualVelocity_ASC
    actualVelocity_DESC
    status_ASC
    status_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
