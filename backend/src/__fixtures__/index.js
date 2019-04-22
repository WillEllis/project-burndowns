const userFixture = require('./userFixture');
const teamFixture = require('./teamFixture');
const projectFixture = require('./projectFixture');
const sprintFixture = require('./sprintFixture');
const complexityChangeFixture = require('./complexityChangeFixture');
const phaseFixture = require('./phaseFixture');
const storyFixture = require('./storyFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  team: teamFixture,
  project: projectFixture,
  sprint: sprintFixture,
  complexityChange: complexityChangeFixture,
  phase: phaseFixture,
  story: storyFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
