const ProjectService = require('../../../services/projectService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  projectFind(id: String!): Project!
`;

const resolver = {
  projectFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.projectRead);

    return new ProjectService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
