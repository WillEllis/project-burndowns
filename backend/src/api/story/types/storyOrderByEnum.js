const schema = `
  enum StoryOrderByEnum {
    id_ASC
    id_DESC
    backlogPriority_ASC
    backlogPriority_DESC
    name_ASC
    name_DESC
    effort_ASC
    effort_DESC
    dateAdded_ASC
    dateAdded_DESC
    status_ASC
    status_DESC
    dateFinished_ASC
    dateFinished_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
