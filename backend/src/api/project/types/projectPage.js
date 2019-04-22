const schema = `
  type ProjectPage {
    rows: [Project!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
