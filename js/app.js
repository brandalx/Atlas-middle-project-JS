import { burger } from "./tools/burger.js";
import { doApi } from "./atlasList.js";
import { favorites, mainlogo } from "./atlasForm.js";

// import { searchQ } from "./atlasList.js";

const init = () => {
  // searchQ();
  burger();
  doApi("israel");
  favorites();
  mainlogo();
};

init();
