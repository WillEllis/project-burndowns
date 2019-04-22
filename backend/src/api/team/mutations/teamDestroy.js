const TeamService = require('../../../services/teamService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  teamDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  teamDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.teamDestroy);

    await new TeamService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
