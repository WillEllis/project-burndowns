const schema = `
  input ComplexityChangeInput {
    project: String!
    date: String!
    effortChange: Int!
    reason: String!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
