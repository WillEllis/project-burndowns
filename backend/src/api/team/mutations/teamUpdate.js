const TeamService = require('../../../services/teamService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  teamUpdate(id: String!, data: TeamInput!): Team!
`;

const resolver = {
  teamUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.teamEdit);

    return new TeamService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
