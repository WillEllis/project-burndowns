const schema = `
  type Phase {
    id: String!
    order: Int
    name: String
    stories: [ Story! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
