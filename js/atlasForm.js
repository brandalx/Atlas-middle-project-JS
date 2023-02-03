import { doApi, doApiFav } from "./atlasList.js";

export const favorites = () => {
  const fav1 = document.querySelector("#fav1");
  const fav2 = document.querySelector("#fav2");
  const fav3 = document.querySelector("#fav3");
  const fav4 = document.querySelector("#fav4");
  const fav5 = document.querySelector("#fav5");

  fav1.addEventListener("click", () => {
    doApi("usa");
  });
  fav2.addEventListener("click", () => {
    doApi("israel");
  });
  fav3.addEventListener("click", () => {
    doApi("uk");
  });
  fav4.addEventListener("click", () => {
    doApi("france");
  });
  fav5.addEventListener("click", () => {
    doApi("thailand");
  });
};

export const bordercountry = () => {
  const links = document.querySelectorAll(".bordercountry");
  for (const element of links) {
    element.addEventListener("click", () => {
      console.log(element.innerHTML);
      doApiFav(element.innerHTML);
    });
  }
};

export const mainlogo = () => {
  let main = document.querySelector("#main");
  main.addEventListener("click", () => {
    doApi("israel");
  });
};
