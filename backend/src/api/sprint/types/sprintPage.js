const schema = `
  type SprintPage {
    rows: [Sprint!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
