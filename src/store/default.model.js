import { persist, action, thunk } from "easy-peasy";
import axios from "axios";

const defaultModel = {
  inputValue: "",
  selectValue: "",
  results: null,
  getResults: thunk(async (state, payload) => {
    await axios
      .get(
        `http://localhost:8000/api/${payload.selectValue}/${payload.inputValue}`
      )
      .then((response) => {
        console.log(response.data);
        state.results = response.data;
      })
      .catch((err) => console.log(err));
  }),
  resetSearch: action((state, payload) => {
    state.results = null;
  }),
  inputChange: action((state, payload) => {
    state.inputValue = payload;
  }),
  selectChange: action((state, payload) => {
    state.selectValue = payload;
  }),
};

export default persist(defaultModel);
