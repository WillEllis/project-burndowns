const schema = `
  input ProjectInput {
    name: String!
    stories: [ String! ]
    initialEstimate: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
