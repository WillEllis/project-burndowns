const StoryService = require('../../../services/storyService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  storyList(filter: StoryFilterInput, limit: Int, offset: Int, orderBy: StoryOrderByEnum): StoryPage!
`;

const resolver = {
  storyList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.storyRead);

    return new StoryService(context).findAndCountAll({
      ...args,
      requestedAttributes: graphqlSelectRequestedAttributes(
        info,
        'rows',
      ),
    });
  },
};

exports.schema = schema;
exports.resolver = resolver;
