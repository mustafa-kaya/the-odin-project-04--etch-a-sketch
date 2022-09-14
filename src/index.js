// Style
import "./index.scss";

// Components
import "./components/button/button.js";
import "./components/subtitle/subtitle.js";
import "./components/logo/logo.js";
import "./components/tools/tools.js";
import "./components/dimensions/dimensions.js";
import "./components/colors/colors.js";
import "./components/sidebar/sidebar.js";
import "./components/canvas/canvas.js";
import "./utils/draw.js";

// Functions
import { createButton } from "./components/button/button.js";
import { createSubtitle } from "./components/subtitle/subtitle.js";
import { createLogo } from "./components/logo/logo.js";
import {
  createTools,
  initialTool,
  selectTool,
} from "./components/tools/tools.js";
import {
  createDimensions,
  initialDimension,
  selectDimension,
} from "./components/dimensions/dimensions.js";
import {
  createColors,
  initialColor,
  selectColor,
} from "./components/colors/colors.js";
import { createSidebar } from "./components/sidebar/sidebar.js";
import { clearCanvas, createCanvas } from "./components/canvas/canvas.js";
import { draw } from "./utils/draw.js";

// FIXME: TEST AREA

// Select Functions

const appDiv = document.querySelector("#app");
const sidebar = createSidebar();
appDiv.appendChild(sidebar);

selectTool();
selectColor();
selectDimension();

function initialize() {
  createCanvas(16);
  initialColor();
  initialTool();
  initialDimension();
}

initialize();
export { initialize };
