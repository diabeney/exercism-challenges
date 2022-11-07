import Modal from "../Components/Modal";

export const getElement = function (selectors) {
  return selectors.map((item) => document.querySelector(item));
};

export const createFromObjects = (arr) => {
  let result = [];
  arr.map((item) => {
    let { tag, classNames, content } = item;
    let element = document.createElement(tag);
    classNames.length ? element.classList.add(...classNames) : null;
    content ? (element.textContent = content) : null;
    result.push(element);
  });
  return result;
};

export const _create = (tag, classes, content) => {
  let element = document.createElement(tag);
  classes ? element.classList.add(...classes) : null;
  element.textContent = content;
  return element;
};

export const _append = (parent, children) => {
  children.forEach((child) => {
    if (child) parent.appendChild(child);
  });
};
export const _remove = (parent, child) => {
  return parent.removeChild(child);
};

export const Component = (parentNode, childNodes) => {
  let parent = _create(parentNode);
  const [first, second, third] = createFromObjects(childNodes); //Maximum of three child elements for now
  _append(parent, [first, second, third]);
  return parent;
};

export const isError = (err) => err instanceof Error;

export const addClass = (arr) => {
  arr.forEach((item) => {
    item.element.classList.add(...item.classes);
  });
};

export function displayResults(
  title,
  element,
  isValid = (f) => f,
  errMessage,
  answerFn = (f) => f,
  resultsProvider = (f) => f,
  resultsDisplay
) {
  element.addEventListener("submit", (e) => {
    let [answer, input, optionalAnswer] = answerFn();
    e.preventDefault();
    let result =
      answer.length > 0 && isValid(answer) ? answer : new Error(errMessage);

    if (isError(result)) Modal(result, null);
    else {
      let final = resultsProvider(result, optionalAnswer);
      let content = resultsDisplay(final);
      let obj = {
        title: title,
        content: content,
      };
      Modal(null, obj);
    }
    input.value = "";
  });
}

export const valtoString = (val) => val.toString();

export const setStyles = (element, styles) => {
  Object.assign(element.style, styles);
};
