import { getElement, _append, _create, _remove } from "./src/Utils/utils";
import { colorBands } from "./src/Utils/exercism";
import Tooltip from "./src/Components/Tooltip";
import { planetDetails } from "./src/Utils/exercism";

const [root, menuBtn, navBar] = getElement([".root", ".btn-menu", "nav"]);

menuBtn.addEventListener("click", () => {
  let navShow = navBar.getAttribute("data-show");
  if (navShow === "false") {
    [...menuBtn.children].forEach((child) =>
      child.setAttribute("data-rotate", "true")
    );
    navBar.setAttribute("data-show", "true");
  } else {
    [...menuBtn.children].forEach((child) =>
      child.setAttribute("data-rotate", "false")
    );
    navBar.setAttribute("data-show", "false");
  }
  root.classList.toggle("hide");
  document.body.classList.toggle("hide");
});

const [resistorSelect, resistorForm] = getElement([
  "#resistor-select",
  "#resistor-form",
]);

colorBands.forEach((band) => {
  let option = _create("option", null, `${band}`);
  option.value = `${band}`;
  _append(resistorSelect, [option]);
});

export let colorDuoAnswer = [];

resistorSelect.addEventListener("change", (e) => {
  if (colorDuoAnswer.length === 2) colorDuoAnswer = [];
  colorDuoAnswer.push(e.target.value);
  let [first, second] = colorDuoAnswer;
  let tip = Tooltip(
    `You've selected ${first} ${second ? ` and ${second}.` : `only.`}`
  );
  _append(resistorForm, [tip]);
  setTimeout(() => {
    _remove(resistorForm, tip);
  }, 2000);
});

const [spaceForm, planetSelect] = getElement(["#space-form", "#planet-select"]);

Object.keys(planetDetails).forEach((planet) => {
  let option = _create("option", null, `${planet}`);
  option.value = `${planet}`;
  _append(planetSelect, [option]);
});

export let spaceAgeInput;

planetSelect.addEventListener("change", (e) => {
  spaceAgeInput = e.target.value;
  let tip = Tooltip(`You've selected ${spaceAgeInput}.`);
  _append(spaceForm, [tip]);
  setTimeout(() => {
    _remove(spaceForm, tip);
  }, 2000);
});
