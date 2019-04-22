const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const StoryService = require('../../../services/storyService');

const schema = `
  storyAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  storyAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.storyAutocomplete);

    return new StoryService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
