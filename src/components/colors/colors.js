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

export { createColors };
