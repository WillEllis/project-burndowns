const schema = `
  type StoryPage {
    rows: [Story!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
