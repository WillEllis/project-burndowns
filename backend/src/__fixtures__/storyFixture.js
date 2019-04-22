const genericFixture = require('./genericFixture');
const StoryRepository = require('../database/repositories/storyRepository');

const storyFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new StoryRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = storyFixture;
