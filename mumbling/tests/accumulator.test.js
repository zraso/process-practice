const accumulator = require('../src/accumulator')

test('correct result with single letter', () => {
  expect(accumulator("a")).toEqual("A")
});