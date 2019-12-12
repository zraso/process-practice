const isSquare = require('../src/square')

test('a negative number returns false', () => {
  expect(isSquare(-1)).toEqual(false)
});