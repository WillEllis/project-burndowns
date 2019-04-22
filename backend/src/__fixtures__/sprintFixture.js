const genericFixture = require('./genericFixture');
const SprintRepository = require('../database/repositories/sprintRepository');

const sprintFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SprintRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = sprintFixture;
