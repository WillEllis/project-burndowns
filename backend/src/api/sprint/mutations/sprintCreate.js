const SprintService = require('../../../services/sprintService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sprintCreate(data: SprintInput!): Sprint!
`;

const resolver = {
  sprintCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.sprintCreate);

    return new SprintService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
