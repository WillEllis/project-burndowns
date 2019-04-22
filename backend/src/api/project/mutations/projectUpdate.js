const ProjectService = require('../../../services/projectService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  projectUpdate(id: String!, data: ProjectInput!): Project!
`;

const resolver = {
  projectUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.projectEdit);

    return new ProjectService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
