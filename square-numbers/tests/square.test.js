const isSquare = require('../src/square')

test('a negative number returns false', () => {
  expect(isSquare(-1)).toEqual(false)
});


test('zero returns true', () => {
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

test('25 returns true', () => {
  expect(isSquare(25)).toEqual(true)
});

test('23 returns false', () => {
  expect(isSquare(23)).toEqual(false)
});

test('16 returns true', () => {
  expect(isSquare(16)).toEqual(true)
});

test('5 returns true', () => {
  expect(isSquare(5)).toEqual(false)
});