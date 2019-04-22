const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Sprint extends AbstractEntityModel {
  constructor() {
    super('sprint', 'sprint', {
      number: new types.Number(1, null),
      startDate: new types.Date(),
      fastTrack: new types.Boolean(),
      endDate: new types.Date(),
      estimatedVelocity: new types.Number(0, null),
      actualVelocity: new types.Number(0, null),
      status: new types.Enumerator([
        "hit",
        "missed"
      ]),
      comments: new types.String(0, 21845),
      importHash: new types.String(null, 255),
    });
  }
};
