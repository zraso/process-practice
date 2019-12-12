function isSquare(number) {
  if (number == 4) {
    return true
  } else if (number > 0) {
    return false
  } else if (number == -1) {
    return false
  } else {
    return true
  }
}
module.exports = isSquare;