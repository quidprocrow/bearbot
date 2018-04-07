const rando = function () {
  return Math.floor(Math.random() * 21)
}

const uniqueCheck = function (randomNums) {
  if (randomNums[1] === randomNums[2] ||
  randomNums[2] === randomNums[3] ||
  randomNums[3] === randomNums[1]) {
    return false
  }
  return true
}

const readingGenerator = function () {
  const numberArray = [rando(), rando(), rando()]
  if (uniqueCheck(numberArray)) {
    return numberArray
  } else {
    return readingGenerator()
  }
}

module.exports = {
  readingGenerator
}
