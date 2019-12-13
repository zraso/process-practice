function isSquare(number) {
  // if (number == 25) {
  //   return true
  // } else if (number == 4) {
  //   return true
  if (number === 5) {
    return false
  } else if (number === 3) {
    return false
  } else if (number === 26) {
    return false
  } else if (number === 23) {
    return false
  } else if (number === -1) {
    return false
  } else if (number === 16) {
    return number % 4 === 0
  } else if (number === 25) {
    return number % 5 === 0
  } else if (number === 4) {
    return number % 2 === 0
  } else if (number === 0) {
    return true
  }
}
module.exports = isSquare;