const PhaseService = require('../../../services/phaseService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  phaseCreate(data: PhaseInput!): Phase!
`;

const resolver = {
  phaseCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.phaseCreate);

    return new PhaseService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
