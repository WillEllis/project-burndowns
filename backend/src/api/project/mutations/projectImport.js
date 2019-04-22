const ProjectService = require('../../../services/projectService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  projectImport(data: ProjectInput!, importHash: String!): Boolean
`;

const resolver = {
  projectImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.projectImport);

    await new ProjectService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
