const schema = `
  enum StoryStatusEnum {
    pending
    in_progress
    complete
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
