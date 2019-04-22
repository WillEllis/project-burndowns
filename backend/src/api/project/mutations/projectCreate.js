const ProjectService = require('../../../services/projectService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  projectCreate(data: ProjectInput!): Project!
`;

const resolver = {
  projectCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.projectCreate);

    return new ProjectService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
