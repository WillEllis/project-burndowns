const schema = `
  type Project {
    id: String!
    name: String
    stories: [ Story! ]
    initialEstimate: Int
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
