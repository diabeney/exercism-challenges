import { _create, _append, Component, setStyles } from "../Utils/utils";

const TIP_STYLES = {
  width: "15rem",
  height: "fit-content",
  padding: "1.5rem",
  borderRadius: ".8rem",
  backgroundColor: "hsl(190, 95%, 95%)",
  color: "rgb(15,21,26)",
  fontFamily: "Karla",
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  opacity: 0,
  transform: "translateY(100%)",
  transition: "all 300ms ease-in",
  zIndex: "10000",
};

export default function Tooltip(message) {
  let tipContent = Component("section", [
    {
      tag: "h2",
      classNames: "",
      content: "Tip",
    },
    {
      tag: "p",
      classNames: "",
      content: `${message}`,
    },
  ]);

  setStyles(tipContent, TIP_STYLES);
  tipContent.classList.add("animate__animated", "animate__bounceIn", "tip");

  return tipContent;
}
