import {
  allergyScores,
  Score,
  getFullColorVal,
  randomGenerator,
  getYear,
  luckyNumber,
  WordCounter,
} from "./src/Utils/exercism";
import { getElement, displayResults, valtoString } from "./src/Utils/utils";
import { colorDuoAnswer, spaceAgeInput } from "./main";

//<------- Allergies ------>

const [testAllergyForm] = getElement(["#allergy-form"]);
const allergyValidator = (ans) => !isNaN(parseInt(ans));
const allergyDisplay = (val) => val.join(", ");
const getAllergyAnswer = () => {
  const [allergyInput] = getElement(["#allergy-form > input"]);
  const allergyAnswer = allergyInput.value;
  return [allergyAnswer, allergyInput];
};

displayResults(
  "Allergies",
  testAllergyForm,
  allergyValidator,
  "Enter a number",
  getAllergyAnswer,
  allergyScores,
  allergyDisplay
);

// <--------Scrabble Score ------->
const [scrabbleForm] = getElement(["#scrabble-form"]);
const scrabbleIsValid = (ans) => /[a-z]+/gi.test(ans);
const getScrabbleAnswer = () => {
  const [scrabbleInput] = getElement(["#scrabble-form > input"]);
  const scrabbleAnswer = scrabbleInput.value;
  return [scrabbleAnswer, scrabbleInput];
};

displayResults(
  "Scrabble Score",
  scrabbleForm,
  scrabbleIsValid,
  "Please enter a word",
  getScrabbleAnswer,
  Score,
  valtoString
);
// <------- Resistor Color Duo -------->

const [resistorForm] = getElement(["#resistor-form"]);
const resistorValidator = (val) => val.length >= 2;
const getResistorAnswer = () => {
  const [scrabbleSelect] = getElement(["#scrabble-form > input"]);
  return [colorDuoAnswer, scrabbleSelect];
};

displayResults(
  "Color bands",
  resistorForm,
  resistorValidator,
  "Enter two colors",
  getResistorAnswer,
  getFullColorVal,
  valtoString
);

// <------- Random Numbers Generator -------->

const [randomGeneratorForm] = getElement(["#random-form"]);
const randomValidator = (ans) => {
  if (ans > 400 || isNaN(ans)) return false;
  return true;
};
const getRandomNumbers = () => {
  const [randomFormInput] = getElement(["#random-form > input"]);
  const randomNumbersLimit = randomFormInput.value;
  return [randomNumbersLimit, randomFormInput];
};

displayResults(
  "Random Numbers",
  randomGeneratorForm,
  randomValidator,
  "Enter a number less than 400",
  getRandomNumbers,
  randomGenerator,
  allergyDisplay
);

// <------- Space Age --------->

const [spaceForm] = getElement(["#space-form"]);
const spaceAgeValidator = (ans) => !isNaN(ans);
const getSpaceAge = () => {
  const [spaceInput] = getElement(["#space-form > input"]);
  return [spaceInput.value, spaceInput, spaceAgeInput];
};

displayResults(
  "Space Age",
  spaceForm,
  spaceAgeValidator,
  "Please enter a number",
  getSpaceAge,
  getYear,
  valtoString
);

// <------- Lucky numbers -------->

const [luckyNumberForm] = getElement(["#lucky-number-form"]);
const luckyNumberValidator = (ans) => !isNaN(ans);
const getLuckyNumber = () => {
  const [input] = getElement(["#lucky-number-form > input"]);
  return [input.value, input];
};

displayResults(
  "Lucky Numbers",
  luckyNumberForm,
  luckyNumberValidator,
  "Please enter a number.",
  getLuckyNumber,
  luckyNumber,
  valtoString
);

// <------- Word Counter --------->
const [wordCountForm] = getElement(["#word-count-form"]);
const getWordCount = () => {
  const [input] = getElement(["#word-count-form > input"]);
  return [input.value, input];
};

displayResults(
  "Word Counter",
  wordCountForm,
  scrabbleIsValid,
  "Please enter a sentence",
  getWordCount,
  WordCounter,
  valtoString
);
