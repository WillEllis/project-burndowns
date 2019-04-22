const PhaseService = require('../../../services/phaseService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  phaseImport(data: PhaseInput!, importHash: String!): Boolean
`;

const resolver = {
  phaseImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.phaseImport);

    await new PhaseService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
