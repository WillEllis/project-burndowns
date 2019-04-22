const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const SprintService = require('../../../services/sprintService');

const schema = `
  sprintAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  sprintAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.sprintAutocomplete);

    return new SprintService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
