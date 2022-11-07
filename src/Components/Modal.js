import {
  _append,
  _create,
  _remove,
  getElement,
  Component,
  isError,
} from "../Utils/utils";

export default function Modal(type, options) {
  document.body.classList.add("hide");

  let [modal] = getElement([".modal"]);
  modal.style.display = "grid";

  let entryType = `animate__${isError(type) ? "shakeX" : "bounceIn"}`;
  let btnColor = `${isError(type) ? "err-btn" : "modal-btn"}`;

  let documentHeight = document.documentElement.getBoundingClientRect();
  modal.style.top = `${documentHeight.top * -1}px`;
  const modalContent = Component("section", [
    {
      tag: "h1",
      classNames: ["msg-title"],
      content: isError(type) ? "Invalid Input" : options.title,
    },
    {
      tag: "p",
      classNames: ["content"],
      content: isError(type) ? type.message : options.content,
    },
    {
      tag: "button",
      classNames: ["btn", btnColor],
      content: isError(type) ? "Okay" : "Close",
    },
  ]);
  modalContent.classList.add("modal-dialogue", "flex__jus-col");
  modal.classList.add("animate__animated", entryType);
  modal.appendChild(modalContent);

  const [modalBtn] = getElement([".modal-dialogue .btn"]);
  modalBtn.addEventListener("click", () => {
    const [openedModal, openedDialogue] = getElement([
      ".modal",
      ".modal-dialogue",
    ]);
    _remove(openedModal, openedDialogue);
    modal.style.display = "none";
    modalContent.classList.remove("modal-dialogue", "flex__jus-col");
    modal.classList.remove("animate__animated", entryType);
    document.body.classList.remove("hide");
  });
}
