import { createDiv } from "../../common/_functions";
import { createSubtitle } from "../subtitle/subtitle";
import { createButton } from "../button/button";
import { eraserIcon, pencilIcon, resetIcon } from "../../common/_icon";
import { clearCanvas, createCanvas } from "../canvas/canvas";
import { initialColor } from "../colors/colors";
import { initialDimension } from "../dimensions/dimensions";
import { draw } from "../../utils/draw";

function initialTool() {
  clearToolSelection();
  const initialTool = document.querySelector(".tools .button");
  initialTool.classList.add("button--selected");
}

function createTools() {
  const tools = createDiv("tools");
  tools.appendChild(createSubtitle("Tools"));
  tools.appendChild(createButton("Pencil", pencilIcon));
  tools.appendChild(createButton("Eraser", eraserIcon));
  tools.appendChild(createButton("Reset", resetIcon));
  return tools;
}

function selectTool() {
  const tools = document.querySelectorAll(".tools .button");
  tools.forEach((tool) => {
    tool.addEventListener("click", (event) => {
      clearToolSelection();
      event.target.classList.add("button--selected");
      const buttonText = event.target.querySelector(":nth-child(2)").innerHTML;
      switch (buttonText) {
        case "Pencil":
          initialColor();
          break;

        case "Eraser":
          initialColor();
          draw("white");
          break;

        case "Reset":
          clearCanvas();
          createCanvas(16);
          initialColor();
          initialDimension();
          initialTool();
          break;
      }
    });
  });
}

function clearToolSelection() {
  const tools = document.querySelectorAll(".tools .button");
  tools.forEach((tool) => {
    tool.classList.remove("button--selected");
  });
}

export { createTools, selectTool, initialTool };
