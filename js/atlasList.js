import Atlas from "./atlasItem.js";
import { bordercountry } from "./atlasForm.js";
import { finaltest } from "./test.js";

let query = " ";
let div = document.querySelector("#main-appender");

let input = document.querySelector("#input");
let search = document.querySelector("#search");
search.addEventListener("submit", (e) => {
  e.preventDefault();
  query = input.value.toLowerCase();
  console.log("query is " + query);

  doApi(query);
});

//test start
finaltest();
//test end

export const doApiFav = async (query2) => {
  if (query2 == "uk") {
    query2 = "united kingdom";
  }
  let countryCode = query2;
  const url = ` https://restcountries.com/v3.1/alpha/${countryCode}`;
  div.innerHTML = `<h3 style="color:var(--primary)" class=" text-center mt-4 mx-auto">Loading...</h3>`;
  const resp = await axios.get(url);
  console.log(resp.data);
  createList(resp.data);
};

export const doApi = async (query) => {
  if (query == "uk") {
    query = "united kingdom";
  }
  try {
    if (query.length < 2) {
      const url = `https://restcountries.com/v3.1/name/${defauslt}/?fullText=true`;
      div.innerHTML = `<h3  style="color:var(--primary)" class=" text-center mt-4 mx-auto">Loading...</h3>`;
      const resp = await axios.get(url);
      console.log(resp.data);

      createList(resp.data);
    } else {
      const url = `https://restcountries.com/v3.1/name/${query}/?fullText=true`;
      console.log("url is " + url);
      div.innerHTML = `<h3 style="color:var(--primary)" class=" text-center mt-4 mx-auto">Loading...</h3>`;
      const resp = await axios.get(url);
      console.log(resp.data);
      createList(resp.data);
    }
  } catch (err) {
    if (err) {
      try {
        const url = `https://restcountries.com/v3.1/name/${query}`;
        console.log("url is " + url);
        div.innerHTML = `<h3 style="color:var(--primary)" class=" text-center mt-4 mx-auto">Loading...</h3>`;
        const resp = await axios.get(url);
        console.log(resp.data);
        createList(resp.data);
      } catch {
        console.log(err);
        div.innerHTML = " ";
        div.innerHTML = `<p style="font-size:0.9em" class=" text-center mt-4">Sorry, we didnt find anything for your request<bold  style="color:var(--primary)" class="fw-bold"> ${query}</bold>. Check your connection or try to rewrite your search</p>`;
      }
    }
  }
};

export const createList = (arr) => {
  div.innerHTML = " ";
  const temp_arr = arr.slice(0, 1);

  console.log(temp_arr);

  temp_arr.forEach((item) => {
    let list = new Atlas("#main-appender", item);
    list.render();
  });
  if (document.querySelectorAll(".bordercountry").length == 0) {
    console.log("no border countries");
  } else {
    bordercountry();
  }
};
