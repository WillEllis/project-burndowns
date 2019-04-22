const schema = `
  enum ProjectOrderByEnum {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    initialEstimate_ASC
    initialEstimate_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
