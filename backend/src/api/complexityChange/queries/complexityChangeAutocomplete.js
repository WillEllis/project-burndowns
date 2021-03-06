const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ComplexityChangeService = require('../../../services/complexityChangeService');

const schema = `
  complexityChangeAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  complexityChangeAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.complexityChangeAutocomplete);

    return new ComplexityChangeService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
