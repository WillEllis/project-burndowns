const SprintService = require('../../../services/sprintService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sprintFind(id: String!): Sprint!
`;

const resolver = {
  sprintFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.sprintRead);

    return new SprintService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
