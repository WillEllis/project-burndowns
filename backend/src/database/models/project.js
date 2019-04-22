const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Project extends AbstractEntityModel {
  constructor() {
    super('project', 'project', {
      name: new types.String(1, 255),
      stories: new types.RelationToMany(),
      initialEstimate: new types.Number(0, null),
      importHash: new types.String(null, 255),
    });
  }
};
