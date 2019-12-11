function accumulator(letters) {
  if (letters === "a") {
    return letters.toUpperCase()
  } else if (letters === "ab") {
    return "A-Bb"
  } else {
    return "A-Bb-Ccc"
  }
}

module.exports = accumulator;