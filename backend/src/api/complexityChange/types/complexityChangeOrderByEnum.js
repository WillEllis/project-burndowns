const schema = `
  enum ComplexityChangeOrderByEnum {
    id_ASC
    id_DESC
    date_ASC
    date_DESC
    effortChange_ASC
    effortChange_DESC
    reason_ASC
    reason_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
