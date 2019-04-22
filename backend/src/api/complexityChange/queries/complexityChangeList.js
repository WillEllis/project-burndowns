const ComplexityChangeService = require('../../../services/complexityChangeService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  complexityChangeList(filter: ComplexityChangeFilterInput, limit: Int, offset: Int, orderBy: ComplexityChangeOrderByEnum): ComplexityChangePage!
`;

const resolver = {
  complexityChangeList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.complexityChangeRead);

    return new ComplexityChangeService(context).findAndCountAll({
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
