const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class ComplexityChange extends AbstractEntityModel {
  constructor() {
    super('complexityChange', 'complexityChange', {
      project: new types.RelationToOne(),
      date: new types.Date(),
      effortChange: new types.Number(null, null),
      reason: new types.String(1, 255),
      importHash: new types.String(null, 255),
    });
  }
};
