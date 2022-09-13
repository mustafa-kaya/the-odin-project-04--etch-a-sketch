import { createDiv } from "../../common/_functions";
import { createSubtitle } from "../subtitle/subtitle";
import { createButton } from "../button/button";
import { eraserIcon, pencilIcon, resetIcon } from "../../common/_icon";

function createTools() {
  const tools = createDiv("tools");
  tools.appendChild(createSubtitle("Tools"));
  tools.appendChild(createButton("Pencil", pencilIcon));
  tools.appendChild(createButton("Eraser", eraserIcon));
  tools.appendChild(createButton("Reset", resetIcon));
  return tools;
}

export { createTools };
