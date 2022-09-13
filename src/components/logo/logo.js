import { createDiv } from "../../common/_functions";

function createLogo() {
  const logo = createDiv("logo");
  logo.innerHTML += "ETCH-A-SKETCH";
  return logo;
}

export { createLogo };
