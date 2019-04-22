const schema = `
  input StoryInput {
    backlogPriority: Int!
    name: String!
    description: String
    effort: Int
    phase: String
    dateAdded: String!
    status: StoryStatusEnum!
    dateFinished: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
