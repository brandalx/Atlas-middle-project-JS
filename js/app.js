import { burger } from "./tools/burger.js";
import { doApi } from "./atlasList.js";
import { clicks, favorites, mainlogo } from "./atlasForm.js";
import { finaltest } from "./test.js";

const init = () => {
  burger();
  doApi("israel");
  favorites();
  mainlogo();
  clicks();
  finaltest();
};

init();
