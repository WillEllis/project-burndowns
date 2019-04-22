const genericFixture = require('./genericFixture');
const TeamRepository = require('../database/repositories/teamRepository');

const teamFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new TeamRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = teamFixture;
