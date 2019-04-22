const TeamService = require('../../../services/teamService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  teamImport(data: TeamInput!, importHash: String!): Boolean
`;

const resolver = {
  teamImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.teamImport);

    await new TeamService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
