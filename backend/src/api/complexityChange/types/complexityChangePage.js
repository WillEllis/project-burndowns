const schema = `
  type ComplexityChangePage {
    rows: [ComplexityChange!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
