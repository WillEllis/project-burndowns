const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Phase extends AbstractEntityModel {
  constructor() {
    super('phase', 'phase', {
      order: new types.Number(1, null),
      name: new types.String(null, null),
      stories: new types.RelationToMany(),
      importHash: new types.String(null, 255),
    });
  }
};
