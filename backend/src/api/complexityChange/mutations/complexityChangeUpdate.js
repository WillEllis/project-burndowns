const ComplexityChangeService = require('../../../services/complexityChangeService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  complexityChangeUpdate(id: String!, data: ComplexityChangeInput!): ComplexityChange!
`;

const resolver = {
  complexityChangeUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.complexityChangeEdit);

    return new ComplexityChangeService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
