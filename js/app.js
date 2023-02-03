import { burger } from "./tools/burger.js";
import { doApi } from "./atlasList.js";
import { favorites, mainlogo } from "./atlasForm.js";

const init = () => {
  burger();
  doApi("israel");
  favorites();
  mainlogo();
};

init();
