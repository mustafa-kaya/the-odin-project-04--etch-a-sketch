import { createDiv } from "../../common/_functions";
import { createSubtitle } from "../subtitle/subtitle";
import { createButton } from "../button/button";
import { clearCanvas, createCanvas } from "../canvas/canvas";
import { initialColor } from "../colors/colors";

function initialDimension() {
  clearDimensionSelection();
  const initialDimension = document.querySelector(".dimensions :nth-child(4)");
  initialDimension.classList.add("button--selected");
}

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

      const buttonText = event.target.querySelector(":nth-child(1)").innerHTML;
      switch (buttonText) {
        case "4 x 4 grid":
          clearCanvas();
          createCanvas(4);
          initialColor();
          break;

        case "8 x 8 grid":
          clearCanvas();
          createCanvas(8);
          initialColor();
          break;

        case "16 x 16 grid":
          clearCanvas();
          createCanvas(16);
          initialColor();
          break;

        case "32 x 32 grid":
          clearCanvas();
          createCanvas(32);
          initialColor();
          break;
      }
    });
  });
}

function clearDimensionSelection() {
  const dimensions = document.querySelectorAll(".dimensions .button");
  dimensions.forEach((dimension) => {
    dimension.classList.remove("button--selected");
  });
}

export { createDimensions, selectDimension, initialDimension };
