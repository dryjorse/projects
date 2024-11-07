function degreeNumber(number, degree) {
  if (degree === 1) return 1;

  let result = number;

  for (let i = 1; i < degree; i++) {
    result *= number;
  }

  return result;
}

function checkLessOrMore(number, min, max) {
  return number >= min && number <= max;
}

const replaceAt = (string, index, replacement) => {
  return string.slice(0, index) + replacement + string.slice(index + 1);
};

const replaceAtArray = (array, index, replacement) => {
  return [...array.slice(0, index), replacement, ...array.slice(index + 1)];
};
