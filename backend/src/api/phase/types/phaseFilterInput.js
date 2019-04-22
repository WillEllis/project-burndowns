const schema = `
  input PhaseFilterInput {
    id: String
    name: String
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
