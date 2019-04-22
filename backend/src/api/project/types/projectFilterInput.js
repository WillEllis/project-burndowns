const schema = `
  input ProjectFilterInput {
    id: String

    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
