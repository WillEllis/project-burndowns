const schema = `
  input TeamInput {
    image: [ FileInput! ]
    name: String!
    estVelocity: Int
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
