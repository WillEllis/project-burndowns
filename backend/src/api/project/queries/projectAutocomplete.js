const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ProjectService = require('../../../services/projectService');

const schema = `
  projectAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  projectAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.projectAutocomplete);

    return new ProjectService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
