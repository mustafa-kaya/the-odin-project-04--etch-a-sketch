import { createDiv } from "../../common/_functions";
import { createColors } from "../colors/colors";
import { createDimensions } from "../dimensions/dimensions";
import { createLogo } from "../logo/logo";
import { createTools } from "../tools/tools";

function createSidebar() {
  const sidebar = createDiv("sidebar");
  sidebar.appendChild(createLogo());
  sidebar.appendChild(createTools());
  sidebar.appendChild(createColors());
  sidebar.appendChild(createDimensions());
  return sidebar;
}

export { createSidebar };
