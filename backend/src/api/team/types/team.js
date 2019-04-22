const schema = `
  type Team {
    id: String!
    image: [ File! ]
    name: String
    estVelocity: Int
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
