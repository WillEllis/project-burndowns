const StoryService = require('../../../services/storyService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  storyCreate(data: StoryInput!): Story!
`;

const resolver = {
  storyCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.storyCreate);

    return new StoryService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
