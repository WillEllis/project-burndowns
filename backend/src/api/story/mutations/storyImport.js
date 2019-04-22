const StoryService = require('../../../services/storyService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  storyImport(data: StoryInput!, importHash: String!): Boolean
`;

const resolver = {
  storyImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.storyImport);

    await new StoryService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
