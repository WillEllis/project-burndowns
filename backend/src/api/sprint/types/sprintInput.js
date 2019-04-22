const schema = `
  input SprintInput {
    number: Int!
    startDate: String!
    fastTrack: Boolean
    endDate: String
    estimatedVelocity: Int!
    actualVelocity: Int
    status: SprintStatusEnum
    comments: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
