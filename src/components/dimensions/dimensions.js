import { createDiv } from "../../common/_functions";
import { createSubtitle } from "../subtitle/subtitle";
import { createButton } from "../button/button";

function createDimensions() {
  const dimensions = createDiv("dimensions");
  dimensions.appendChild(createSubtitle("Dimensions"));
  dimensions.appendChild(createButton("4 x 4 grid"));
  dimensions.appendChild(createButton("8 x 8 grid"));
  dimensions.appendChild(createButton("16 x 16 grid"));
  dimensions.appendChild(createButton("32 x 32 grid"));
  return dimensions;
}

function selectDimension() {
  const dimensions = document.querySelectorAll(".dimensions .button");
  dimensions.forEach((dimension) => {
    dimension.addEventListener("click", (event) => {
      clearDimensionSelection();
      event.target.classList.add("button--selected");
    });
  });
}

function clearDimensionSelection() {
  const dimensions = document.querySelectorAll(".dimensions .button");
  dimensions.forEach((dimension) => {
    dimension.classList.remove("button--selected");
  });
}

export { createDimensions, selectDimension };
