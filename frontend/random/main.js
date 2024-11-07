const span = document.querySelector(".random");
const spanTwo = document.querySelector(".random-two");

const persons = [
  "Азим",
  "Бека",
  "Жума",
  "Ш Айжамал",
  "Нигер Айжамал",
  "Айымжан",
];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const one = persons[randomInteger(1, 6)];

span.innerHTML = persons[randomInteger(0, 5)];
