const PhaseService = require('../../../services/phaseService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  phaseFind(id: String!): Phase!
`;

const resolver = {
  phaseFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.phaseRead);

    return new PhaseService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
