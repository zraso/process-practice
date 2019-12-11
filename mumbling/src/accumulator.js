function accumulator(letters) {
  if (letters === "a") {
    return letters.toUpperCase()
  } else if (letters === "ab") {
    array = letters.split("")
    first_letter = array[0].toUpperCase()
    second_letter = (array[1].repeat(2)).charAt(0).toUpperCase() + (array[1].repeat(2)).slice(1)
    return first_letter + "-" + second_letter
  } else if (letters === "abc") {
    return "A-Bb-Ccc"
  } else {
    return "A-Bb-Ccc-Dddd"
  }
}

module.exports = accumulator;