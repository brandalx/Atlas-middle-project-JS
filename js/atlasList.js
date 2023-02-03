import Atlas from "./atlasItem.js";
export const doApi = async () => {
  try {
    const url = "https://restcountries.com/v3.1/all";
    const resp = await axios.get(url);
    console.log(resp.data);
    createList(resp.data);
  } catch (err) {
    console.log(err);
  }
};

export const createList = (arr) => {
  const temp_arr = arr.slice(0, 2);

  console.log(temp_arr);
  temp_arr.forEach((item) => {
    let list = new Atlas("#main-appender", item);
    list.render();
  });
};
