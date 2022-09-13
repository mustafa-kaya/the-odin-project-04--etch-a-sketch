import { createDiv } from "../../common/_functions";
import { createSubtitle } from "../subtitle/subtitle";

function createColors() {
  const colors = createDiv("colors");
  colors.appendChild(createSubtitle("Colors"));

  for (let index = 1; index <= 12; index++) {
    const color = createDiv(`color--${index}`);
    color.classList.add("color");
    colors.appendChild(color);
  }

  return colors;
}

function selectColor() {
  const colors = document.querySelectorAll(".colors .color");
  colors.forEach((color) => {
    color.addEventListener("click", (event) => {
      clearColorSelection();
      event.target.classList.add("color--selected");
    });
  });
}

function clearColorSelection() {
  const colors = document.querySelectorAll(".colors .color");
  colors.forEach((color) => {
    color.classList.remove("color--selected");
  });
}

export { createColors, selectColor };
