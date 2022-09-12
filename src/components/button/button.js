import { createDiv } from "../../common/_functions.js";

function createButton(name, icon) {
  const button = createDiv("button");
  const buttonText = createDiv("button__text");

  if (icon != undefined) {
    button.innerHTML += icon;
  } else {
    button.classList.add("button--sm"); // If button doesn't have an icon make small button
  }

  buttonText.innerHTML += name;
  button.appendChild(buttonText);

  return button;
}

export { createButton };
