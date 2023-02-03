import { burger } from "./tools/burger.js";
import { doApi } from "./atlasList.js";
// import { searchQ } from "./atlasList.js";

const init = () => {
  // searchQ();
  burger();
  doApi("israel");
};

init();
