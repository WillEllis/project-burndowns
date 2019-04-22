const PhaseService = require('../../../services/phaseService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  phaseDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  phaseDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.phaseDestroy);

    await new PhaseService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
