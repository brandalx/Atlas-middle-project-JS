import Atlas from "./atlasItem.js";
// import { searchQ } from "./atlasForm.js";

let query = " ";
let div = document.querySelector("#main-appender");

let input = document.querySelector("#input");
let search = document.querySelector("#search");
search.addEventListener("submit", (e) => {
  e.preventDefault();
  query = input.value.toLowerCase();

  doApi(query);
});

export const doApi = async (query) => {
  try {
    // let query = new URLSearchParams(window.location.search);
    // console.log(query.get("search"));
    if (query.length < 2) {
      const url = `https://restcountries.com/v3.1/name/${defauslt}`;
      div.innerHTML = `<h3  style="color:var(--primary)" class=" text-center mt-4 mx-auto">Loading...</h3>`;
      const resp = await axios.get(url);
      console.log(resp.data);

      createList(resp.data);
    } else {
      const url = `https://restcountries.com/v3.1/name/${query}`;
      div.innerHTML = `<h3 style="color:var(--primary)" class=" text-center mt-4 mx-auto">Loading...</h3>`;
      const resp = await axios.get(url);
      console.log(resp.data);
      createList(resp.data);
    }
  } catch (err) {
    console.log(err);
    div.innerHTML = " ";
    div.innerHTML = `<p style="font-size:0.9em" class=" text-center mt-4">Sorry, we didnt find anything for your request<bold  style="color:var(--primary)" class="fw-bold"> ${query}</bold>. Check your connection or try to rewrite your search</p>`;
  }
};

export const createList = (arr) => {
  div.innerHTML = " ";
  const temp_arr = arr.slice(0, 5);

  console.log(temp_arr);

  temp_arr.forEach((item) => {
    let list = new Atlas("#main-appender", item);
    list.render();
  });
};
