import { persist, action, thunk } from "easy-peasy";
import axios from "axios";

const defaultModel = {
  isAuthentified: false,
  inputValue: "1",
  selectTypeValue: "films",
  inWookie: "false",
  results: null,
  getResults: thunk(async (actions, payload) => {
    let url;

    if (payload.inWookie === "false") {
      url = `http://localhost:8000/api/${payload.selectTypeValue}/${payload.inputValue}/`;
    } else {
      url = `http://localhost:8000/api/${payload.selectTypeValue}/${payload.inputValue}/?format=wookiee`;
    }

    console.log("url ", url);

    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        actions.setResults(response.data);
      })
      .catch((err) => console.log(err));
  }),
  setResults: action((state, payload) => {
    state.results = payload;
  }),
  resetSearch: action((state, payload) => {
    state.results = null;
  }),
  inputChange: action((state, payload) => {
    state.inputValue = payload;
  }),
  selectTypeChange: action((state, payload) => {
    state.selectTypeValue = payload;
  }),
  toggleWookie: action((state, payload) => {
    state.inWookie = payload;
  }),
};

export default persist(defaultModel);
