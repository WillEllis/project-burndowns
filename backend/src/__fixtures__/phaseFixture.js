const genericFixture = require('./genericFixture');
const PhaseRepository = require('../database/repositories/phaseRepository');

const phaseFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new PhaseRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = phaseFixture;
