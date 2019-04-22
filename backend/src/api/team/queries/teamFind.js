const TeamService = require('../../../services/teamService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  teamFind(id: String!): Team!
`;

const resolver = {
  teamFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.teamRead);

    return new TeamService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
