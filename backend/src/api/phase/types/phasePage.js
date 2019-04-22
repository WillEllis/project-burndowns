const schema = `
  type PhasePage {
    rows: [Phase!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
