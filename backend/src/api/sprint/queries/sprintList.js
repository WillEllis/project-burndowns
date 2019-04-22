const SprintService = require('../../../services/sprintService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  sprintList(filter: SprintFilterInput, limit: Int, offset: Int, orderBy: SprintOrderByEnum): SprintPage!
`;

const resolver = {
  sprintList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.sprintRead);

    return new SprintService(context).findAndCountAll({
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
