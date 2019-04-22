const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const PhaseService = require('../../../services/phaseService');

const schema = `
  phaseAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  phaseAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.phaseAutocomplete);

    return new PhaseService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
