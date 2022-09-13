import { createDiv } from "../../common/_functions";

function createCanvas(size) {
  const canvas = document.querySelector(".canvas");

  for (let index = 0; index < size ** 2; index++) {
    const cell = createDiv("cell");
    cell.style.width = `${512 / size}px`;
    cell.style.height = `${512 / size}px`;
    canvas.appendChild(cell);
  }

  return canvas;
}

export { createCanvas };
