const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Story extends AbstractEntityModel {
  constructor() {
    super('story', 'story', {
      backlogPriority: new types.Number(1, null),
      name: new types.String(2, 255),
      description: new types.String(null, 21845),
      effort: new types.Number(1, 100),
      phase: new types.RelationToOne(),
      dateAdded: new types.Date(),
      status: new types.Enumerator([
        "pending",
        "in_progress",
        "complete"
      ]),
      dateFinished: new types.Date(),
      importHash: new types.String(null, 255),
    });
  }
};
