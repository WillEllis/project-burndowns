const genericFixture = require('./genericFixture');
const ComplexityChangeRepository = require('../database/repositories/complexityChangeRepository');

const complexityChangeFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ComplexityChangeRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = complexityChangeFixture;
