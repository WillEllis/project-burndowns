const ComplexityChangeService = require('../../../services/complexityChangeService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  complexityChangeCreate(data: ComplexityChangeInput!): ComplexityChange!
`;

const resolver = {
  complexityChangeCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.complexityChangeCreate);

    return new ComplexityChangeService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
