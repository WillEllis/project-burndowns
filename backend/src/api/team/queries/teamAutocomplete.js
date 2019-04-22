const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const TeamService = require('../../../services/teamService');

const schema = `
  teamAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  teamAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.teamAutocomplete);

    return new TeamService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
