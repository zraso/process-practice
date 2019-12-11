function accumulator(letters) {
  array = letters.split("")
  const new_array = array.map((letter, index) => letter.toUpperCase() + letter.repeat(index))
  return new_array.join("-")
}

module.exports = accumulator;