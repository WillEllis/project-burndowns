const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Team extends AbstractEntityModel {
  constructor() {
    super('team', 'team', {
      image: new types.Files(),
      name: new types.String(2, 255),
      estVelocity: new types.Number(0, 500),
      importHash: new types.String(null, 255),
    });
  }
};
