const ProjectService = require('../../../services/projectService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  projectList(filter: ProjectFilterInput, limit: Int, offset: Int, orderBy: ProjectOrderByEnum): ProjectPage!
`;

const resolver = {
  projectList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.projectRead);

    return new ProjectService(context).findAndCountAll({
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
