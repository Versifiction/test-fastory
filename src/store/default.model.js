import { persist, action, thunk } from "easy-peasy";
import axios from "axios";

const defaultModel = {
  isAuthentified: false,
  username: "",
  password: "",
  loginError: "",
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
  inputTypeChange: action((state, payload) => {
    state.inputValue = payload;
  }),
  usernameChange: action((state, payload) => {
    state.username = payload;
  }),
  passwordChange: action((state, payload) => {
    state.password = payload;
  }),
  selectTypeChange: action((state, payload) => {
    state.selectTypeValue = payload;
  }),
  toggleWookie: action((state, payload) => {
    state.inWookie = payload;
  }),
  login: thunk(async (actions, payload) => {
    await axios
      .post("http://localhost:8000/api/login", { payload })
      .then((response) => {
        if (response.data.message === "Authentifié") {
          actions.loginSuccess(response.data.message);
        } else {
          actions.loginFail(response.data.message);
        }
      })
      .catch((err) => {
        actions.loginFail(err);
      });
  }),
  loginSuccess: action((state, payload) => {
    state.isAuthentified = true;
  }),
  loginFail: action((state, payload) => {
    state.loginError = payload;
  }),
};

export default persist(defaultModel);
