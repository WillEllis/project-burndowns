const ComplexityChangeService = require('../../../services/complexityChangeService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  complexityChangeDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  complexityChangeDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.complexityChangeDestroy);

    await new ComplexityChangeService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
