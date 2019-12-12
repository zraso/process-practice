const isSquare = require('../src/square')

test('a negative number returns false', () => {
  expect(isSquare(-1)).toEqual(false)
});


test('a negative number returns false', () => {
  expect(isSquare(0)).toEqual(true)
});

test('a negative number returns false', () => {
  expect(isSquare(3)).toEqual(false)
});