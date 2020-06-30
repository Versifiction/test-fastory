import { persist, action } from "easy-peasy";
import axios from "axios";

const defaultModel = {
  inputValue: "",
  selectValue: "",
  results: null,
  getResults: action((state, payload) => {
    const response = axios.get(
      `http://localhost:8000/${state.selectValue}/${state.inputValue}`
    );

    state.results = response.data;
  }),
};

export default persist(defaultModel);
