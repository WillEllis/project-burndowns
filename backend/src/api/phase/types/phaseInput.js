const schema = `
  input PhaseInput {
    order: Int!
    name: String!
    stories: [ String! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
