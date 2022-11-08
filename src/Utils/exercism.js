/**----------------------------------------------
              Exercism Exercises
------------------------------------------------ */

const data = {
  1: "Eggs",
  2: "Peanuts",
  4: "Shellfish",
  8: "Strawberries",
  16: "Tomatoes",
  32: "Chocolate",
  64: "Pollen",
  128: "Cats",
};

export function allergyScores(input) {
  let final = [];
  const lessThan = (num) => {
    return Object.keys(data).filter((item) => item <= num);
  };

  function allergy(score) {
    const modulo = (val) => {
      let remainder = val > 256 ? (val = val % 256) : val; // Condition for numbers greater than 256
      let value = lessThan(remainder);
      let result = remainder % parseInt(value[value.length - 1]);
      if (result >= 0) {
        final.push(data[value[value.length - 1]]);
        allergy(result);
      } else return;
    };
    modulo(score);
  }
  allergy(parseInt(input));
  return final;
}

/**<------------------- Scrabble Score  ---------------------------> */

const letters = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

export function Score(word) {
  let count = 0;
  const words = word.toUpperCase().split("");
  for (let val of words.values())
    for (let item in letters) {
      letters[item].includes(val) ? (count += parseInt(item)) : null;
    }
  return count;
}
// Random Numbers Generator

export function randomGenerator(limit) {
  const randomNumbers = [];
  while (randomNumbers.length < limit) {
    let number = Math.floor(Math.random() * limit) + 1;
    !randomNumbers.includes(number) ? randomNumbers.push(number) : null;
  }
  return randomNumbers;
}

// Returns the code of a resistor color band
export const colorBands = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

function getColorVal(color) {
  return colorBands.indexOf(colorBands.find((item) => item === color));
}

export function getFullColorVal(arr) {
  let [first, second] = arr; //Intentionally destructuring the first two arguments
  let firstColor = getColorVal(first.toLowerCase());
  let secondColor = getColorVal(second.toLowerCase());
  return firstColor.toString() + secondColor.toString();
}

// Space Age

export const planetDetails = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Earth: 1,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

export function getYear(seconds, planet) {
  let result = ((seconds / 31557600) * planetDetails[planet]).toFixed(2);
  return `The age is ${result} years on ${planet}.`;
}

// Lucky Numbers

function twoSum(firstArr, secondArr) {
  let first = parseInt(firstArr.join(""));
  let second = parseInt(secondArr.join(""));

  return first + second;
}

export function luckyNumber(num) {
  let result = num == [...num.toString()].reverse().join("");
  return result ? `${num} is a palindrome!!` : `${num} is not a palindrome.`;
}

/** <---------------------- Word counter -------------------> */

export function WordCounter(word) {
  let newExp = word.toLowerCase().match(/\w+\'?(\w+)?/g);
  let count = newExp.reduce((acc, curr) => {
    return acc[curr] ? acc[curr]++ : (acc[curr] = 1), acc;
  }, {});

  return Object.keys(count).map((item) => {
    return `${item}: ${count[item]}`;
  });
}
// Elyses Enchantments

class ElysesEnchantments {
  constructor() {}

  getItem(arr, position) {
    arr[position];
  }

  setItem(arr, position, replacementCard) {
    arr[position] = replacementCard;
    return arr;
  }

  insertItemAtTop(arr, newCard) {
    arr.push(newCard);
    return arr;
  }
  removeItem(arr, position) {
    arr.splice(position, 1);
    return arr;
  }

  removeItemFromTop(arr) {
    arr.pop();
    return arr;
  }

  insertItemFromTop(arr, newCard) {
    arr.unshift(newCard);
    return arr;
  }

  removeItemAtBottom(arr) {
    arr.shift();
    return arr;
  }

  stackSize(arr, size) {
    return arr.length === size;
  }
}

const crowd = new ElysesEnchantments();

// Converts an array to an object
function covertArrToObj(arr) {
  let obj = arr.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  return obj;
}

// Finds the nth character in a string
function strNthChar(a, n) {
  let split = a.split("");
  return split[n - 1];
}
