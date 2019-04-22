const TeamService = require('../../../services/teamService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  teamList(filter: TeamFilterInput, limit: Int, offset: Int, orderBy: TeamOrderByEnum): TeamPage!
`;

const resolver = {
  teamList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.teamRead);

    return new TeamService(context).findAndCountAll({
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
