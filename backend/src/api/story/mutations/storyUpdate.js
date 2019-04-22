const StoryService = require('../../../services/storyService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  storyUpdate(id: String!, data: StoryInput!): Story!
`;

const resolver = {
  storyUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.storyEdit);

    return new StoryService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
