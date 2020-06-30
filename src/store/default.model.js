import { persist, action } from "easy-peasy";
import axios from "axios";

const defaultModel = {
  inputValue: "",
  selectValue: "",
  results: null,
  getResults: action((state, payload) => {
    console.log("payload ", payload);
    const response = axios.get(
      `http://localhost:8000/api/${payload.selectValue}/${payload.inputValue}`
    );

    console.log("response ", response);

    state.results = response.data;
  }),
  inputChange: action((state, payload) => {
    state.inputValue = payload;
  }),
  selectChange: action((state, payload) => {
    state.selectValue = payload;
  }),
};

export default persist(defaultModel);
