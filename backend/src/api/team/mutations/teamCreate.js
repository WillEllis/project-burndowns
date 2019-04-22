const TeamService = require('../../../services/teamService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  teamCreate(data: TeamInput!): Team!
`;

const resolver = {
  teamCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.teamCreate);

    return new TeamService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
