const isSquare = require('../src/square')

test('a negative number returns false', () => {
  expect(isSquare(-1)).toEqual(false)
});


test('a negative number returns false', () => {
  expect(isSquare(0)).toEqual(true)
});

test('3 returns false', () => {
  expect(isSquare(3)).toEqual(false)
});

test('26 returns false', () => {
  expect(isSquare(26)).toEqual(false)
});

test('4 returns true', () => {
  expect(isSquare(4)).toEqual(true)
});