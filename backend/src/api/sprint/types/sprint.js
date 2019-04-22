const schema = `
  type Sprint {
    id: String!
    number: Int
    startDate: String
    fastTrack: Boolean
    endDate: String
    estimatedVelocity: Int
    actualVelocity: Int
    status: SprintStatusEnum
    comments: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
