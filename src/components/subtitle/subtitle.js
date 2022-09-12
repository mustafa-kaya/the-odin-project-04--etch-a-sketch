import { createDiv } from "../../common/_functions.js";

function createSubtitle(name) {
  const subtitle = createDiv("subtitle");
  subtitle.innerHTML += name;
  return subtitle;
}

export { createSubtitle };
