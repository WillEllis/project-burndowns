const schema = `
  type TeamPage {
    rows: [Team!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
