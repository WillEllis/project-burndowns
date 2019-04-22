const schema = `
  type Story {
    id: String!
    backlogPriority: Int
    name: String
    description: String
    effort: Int
    phase: Phase
    dateAdded: String
    status: StoryStatusEnum
    dateFinished: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
