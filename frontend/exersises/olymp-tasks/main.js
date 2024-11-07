function taskA() {
  let firstNumber = +prompt("Введите первое число");
  let secondNumber = +prompt("Введите второе число");
  let thirdNumber = +prompt("Введите третье число");

  if (
    !(
      Number.isInteger(firstNumber) &&
      Number.isInteger(secondNumber) &&
      Number.isInteger(thirdNumber) &&
      checkLessOrMore(firstNumber, 1, degreeNumber(10, 4)) &&
      checkLessOrMore(secondNumber, 1, degreeNumber(10, 4)) &&
      checkLessOrMore(thirdNumber, 1, degreeNumber(10, 4))
    )
  ) {
    alert("Введите валидные числа");
    return;
  }

  const sortedNumbers = [firstNumber, secondNumber, thirdNumber].sort(
    (a, b) => a - b
  );
  const sortedNumbersString = sortedNumbers.join(" ");

  let isArithmeticProgression = false;
  let difference = 0;

  let isGeometricProgression = false;
  let denominator = 0;

  for (
    let estimatedDifference = 1;
    estimatedDifference <= sortedNumbers[sortedNumbers.length - 1];
    estimatedDifference++
  ) {
    let newNumbersString = `${sortedNumbersString.split(" ")[0]}`;

    for (let i = 0; i < sortedNumbers.length - 1; i++) {
      newNumbersString += ` ${sortedNumbers[i] + estimatedDifference}`;
    }

    if (newNumbersString === sortedNumbersString) {
      isArithmeticProgression = true;
      difference = estimatedDifference;
      break;
    }
  }

  let numbersArray = [firstNumber, secondNumber, thirdNumber];
  let result;
  let resultString;

  rootLoop: for (let currElem = 0; currElem < numbersArray.length; currElem++) {
    for (let i = currElem + 1; i < numbersArray.length; i++) {
      const replacedFirstElem = replaceAtArray(
        numbersArray,
        currElem,
        numbersArray[i]
      );
      result = replaceAtArray(replacedFirstElem, i, numbersArray[currElem]);
      resultString = result.join(" ");

      for (
        let estimatedDenominator = 0.1;
        estimatedDenominator <= result[result.length - 1];
        estimatedDenominator = +(estimatedDenominator + 0.1).toFixed(1)
      ) {
        let newNumbersString = `${resultString.split(" ")[0]}`;

        for (let i = 0; i < result.length - 1; i++) {
          newNumbersString += ` ${result[i] * estimatedDenominator}`;
        }

        if (newNumbersString === resultString) {
          isGeometricProgression = true;
          denominator = estimatedDenominator;
          break rootLoop;
        }
      }
    }
  }

  if (isGeometricProgression && isArithmeticProgression)
    console.log(`B ${sortedNumbersString}`);
  else if (isArithmeticProgression) console.log(`A ${sortedNumbersString}`);
  else if (isGeometricProgression) console.log(`G ${resultString}`);
  else console.log("No");
}

function taskD() {
  let count = +prompt("Введите число");

  if (!(count >= 1 && count <= degreeNumber(10, 4))) {
    alert("Введите валидное значение");
    return;
  }

  count--;

  const generateZeros = (count) => {
    let result = "";

    for (let i = 0; i < count; i++) result += 0;

    return result;
  };

  let startNumber = +("1" + generateZeros(count));
  let countOfNumbers = 0;

  for (let i = startNumber; i < +(startNumber + "0"); i++) {
    const numberString = i + "";
    const firstCondition = !numberString.slice(-2).startsWith("0");
    const secondCondition = !!(i % 3);
    let thirdCodition = false;
    let fourthCondition = true;

    numberString.split("").forEach((number) => {
      if (number % 2) thirdCodition = true;
    });

    let newNumberString = i + "";
    let rearrangedNumbers = [+newNumberString];
    newNumberString
      .slice(0, -1)
      .split("")
      .forEach((_, index) => {
        for (let i = index + 1; i < newNumberString.length; i++) {
          const currentNumber = newNumberString[index];
          const changedFirstNumber = replaceAt(
            newNumberString,
            index,
            newNumberString[i]
          );
          const result = replaceAt(changedFirstNumber, i, currentNumber);

          !rearrangedNumbers.includes(+result) &&
            rearrangedNumbers.push(+result);
        }
      });

    rearrangedNumbers.forEach((number) => {
      let biggerNumber = number <= 10 ? 10 : number;
      let commonDivisor = 1;

      for (let i = 1; i <= biggerNumber; i++) {
        if (!(10 % i) && !(number % i)) commonDivisor = i;
      }

      if (commonDivisor === 1) fourthCondition = false;
    });

    if (firstCondition && secondCondition && thirdCodition && fourthCondition) {
      countOfNumbers++;
    }
  }

  return countOfNumbers;
}
