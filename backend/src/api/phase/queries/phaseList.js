const PhaseService = require('../../../services/phaseService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  phaseList(filter: PhaseFilterInput, limit: Int, offset: Int, orderBy: PhaseOrderByEnum): PhasePage!
`;

const resolver = {
  phaseList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.phaseRead);

    return new PhaseService(context).findAndCountAll({
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
