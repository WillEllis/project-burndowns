const SprintService = require('../../../services/sprintService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sprintImport(data: SprintInput!, importHash: String!): Boolean
`;

const resolver = {
  sprintImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.sprintImport);

    await new SprintService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
