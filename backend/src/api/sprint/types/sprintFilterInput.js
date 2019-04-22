const schema = `
  input SprintFilterInput {
    id: String
    fastTrack: Boolean
    status: SprintStatusEnum
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
