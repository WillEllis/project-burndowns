const PhaseService = require('../../../services/phaseService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  phaseUpdate(id: String!, data: PhaseInput!): Phase!
`;

const resolver = {
  phaseUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.phaseEdit);

    return new PhaseService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
