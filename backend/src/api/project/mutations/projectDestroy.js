const ProjectService = require('../../../services/projectService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  projectDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  projectDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.projectDestroy);

    await new ProjectService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
