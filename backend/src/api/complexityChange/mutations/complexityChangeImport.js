const ComplexityChangeService = require('../../../services/complexityChangeService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  complexityChangeImport(data: ComplexityChangeInput!, importHash: String!): Boolean
`;

const resolver = {
  complexityChangeImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.complexityChangeImport);

    await new ComplexityChangeService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
