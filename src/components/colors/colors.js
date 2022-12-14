import { createDiv } from "../../common/_functions";
import { draw } from "../../utils/draw";
import { createSubtitle } from "../subtitle/subtitle";

function initialColor() {
  clearColorSelection();
  const initialColor = document.querySelector(".color--1");
  initialColor.classList.add("color--selected");
  draw(window.getComputedStyle(initialColor).backgroundColor);
}

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
      draw(window.getComputedStyle(event.target).backgroundColor);
    });
  });
}

function clearColorSelection() {
  const colors = document.querySelectorAll(".colors .color");
  colors.forEach((color) => {
    color.classList.remove("color--selected");
  });
}

export { createColors, selectColor, initialColor };
