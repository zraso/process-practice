const accumulator = require('../src/accumulator')

test('correct result with single letter', () => {
  expect(accumulator("a")).toEqual("A")
});

test('correct result with two letters', () => {
  expect(accumulator("ab")).toEqual("A-Bb")
});

test('correct result with three letters', () => {
  expect(accumulator("abc")).toEqual("A-Bb-Ccc")
});

test('correct result with 4 letters', () => {
  expect(accumulator("abcd")).toEqual("A-Bb-Ccc-Dddd")
});

test('correct result with 4 letters not in alphabetical order', () => {
  expect(accumulator("cwAt")).toEqual("C-Ww-Aaa-Tttt")
});

test('correct result with 4 letters not in alphabetical order', () => {
  expect(accumulator("RqaEzty")).toEqual("R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
});