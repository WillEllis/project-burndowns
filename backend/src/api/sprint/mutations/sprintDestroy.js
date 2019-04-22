const SprintService = require('../../../services/sprintService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sprintDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  sprintDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.sprintDestroy);

    await new SprintService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
