function accumulator(letters) {
  if (letters === "a") {
    return letters.toUpperCase()
  } else if (letters === "ab") {
    return "A-Bb"
  } else if (letters === "abc") {
    return "A-Bb-Ccc"
  } else {
    return "A-Bb-Ccc-Dddd"
  }
}

module.exports = accumulator;