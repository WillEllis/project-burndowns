const schema = `
  input ComplexityChangeFilterInput {
    id: String
    project: String
    dateRange: [ String ]
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
