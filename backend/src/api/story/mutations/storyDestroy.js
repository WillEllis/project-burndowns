const StoryService = require('../../../services/storyService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  storyDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  storyDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.storyDestroy);

    await new StoryService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
