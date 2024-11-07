const ex1 = (arr) => {
  let negativeNumbersCount = 0;
  let positiveNumbersCount = 0;
  console.log(arr.reduce((prev, number) => prev + number, 0));

  let midleNumber = arr.reduce((prev, number) => prev + number, 0) / arr.length;

  arr.forEach((number) => {
    number >= 0 ? positiveNumbersCount++ : negativeNumbersCount++;
  });

  return { negativeNumbersCount, positiveNumbersCount, midleNumber };
};

console.log(ex1([1, -2, 4, 6, -2, 3, 5]));
