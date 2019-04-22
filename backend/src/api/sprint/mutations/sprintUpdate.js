const SprintService = require('../../../services/sprintService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sprintUpdate(id: String!, data: SprintInput!): Sprint!
`;

const resolver = {
  sprintUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.sprintEdit);

    return new SprintService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
