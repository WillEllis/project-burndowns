const schema = `
  enum TeamOrderByEnum {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    estVelocity_ASC
    estVelocity_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
