const schema = `
  type ComplexityChange {
    id: String!
    project: Project
    date: String
    effortChange: Int
    reason: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
