const schema = `
  input StoryFilterInput {
    id: String
    name: String
    phase: String
    status: StoryStatusEnum
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
