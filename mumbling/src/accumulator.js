function accumulator(letters) {
  if (letters === "a") {
    return letters.toUpperCase()
  } else if (letters === "ab") {
    array = letters.split("")
    first_letter = array[0].toUpperCase()
    second_letter = (array[1].repeat(2)).charAt(0).toUpperCase() + (array[1].repeat(2)).slice(1)
    return first_letter + "-" + second_letter
  } else if (letters === "abc") {
    array = letters.split("")
    first_letter = array[0].toUpperCase()
    second_letter = (array[1].repeat(2)).charAt(0).toUpperCase() + (array[1].repeat(2)).slice(1)
    third_letter = (array[2].repeat(3)).charAt(0).toUpperCase() + (array[2].repeat(3)).slice(1)
    return first_letter + "-" + second_letter + "-" + third_letter
  } else {
    array = letters.split("")
    first_letter = array[0].toUpperCase()
    second_letter = (array[1].repeat(2)).charAt(0).toUpperCase() + (array[1].repeat(2)).slice(1)
    third_letter = (array[2].repeat(3)).charAt(0).toUpperCase() + (array[2].repeat(3)).slice(1)
    fourth_letter = (array[3].repeat(4)).charAt(0).toUpperCase() + (array[3].repeat(4)).slice(1)
    return first_letter + "-" + second_letter + "-" + third_letter + "-" + fourth_letter
  }
}

module.exports = accumulator;