import { createList } from "./atlasList.js";
export const finaltest = () => {
  let intervalId;

  const runtest = document.querySelector("#testidrun");
  runtest.addEventListener("click", async () => {
    test();
  });

  const stoptest = document.querySelector("#testidstop");
  stoptest.addEventListener("click", async () => {
    clearInterval(intervalId);
  });

  const test = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const resp = await axios.get(url);
    let finall = resp.data;
    let indexxxx = 0;
    console.log(finall);

    intervalId = setInterval(function () {
      const temp_arr = finall.slice(indexxxx - 1, indexxxx);
      createList(temp_arr);

      indexxxx++;
    }, 2000);
  };
};
