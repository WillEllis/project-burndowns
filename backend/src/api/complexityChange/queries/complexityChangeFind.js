const ComplexityChangeService = require('../../../services/complexityChangeService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  complexityChangeFind(id: String!): ComplexityChange!
`;

const resolver = {
  complexityChangeFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.complexityChangeRead);

    return new ComplexityChangeService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
