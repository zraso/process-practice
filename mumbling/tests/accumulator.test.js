const accumulator = require('../src/accumulator')

test('correct result with single letter', () => {
  expect(accumulator("a")).toEqual("A")
});

test('correct result with two letters', () => {
  expect(accumulator("ab")).toEqual("A-Bb")
});
