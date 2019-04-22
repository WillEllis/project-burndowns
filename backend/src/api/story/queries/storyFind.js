const StoryService = require('../../../services/storyService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  storyFind(id: String!): Story!
`;

const resolver = {
  storyFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.storyRead);

    return new StoryService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
