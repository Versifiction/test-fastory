import { persist, action, thunk } from "easy-peasy";
import axios from "axios";

const defaultModel = {
  isAuthentified: false,
  username: "",
  password: "",
  loginError: "",
  inputValue: "",
  selectTypeValue: "films",
  inWookie: "false",
  results: null,
  resultsType: null,
  resultsError: null,
  url: "",
  activePage: 1,
  getResults: thunk(async (actions, payload) => {
    let url;

    if (payload.inWookie === "false" && payload.inputValue) {
      url = `http://localhost:8000/api/${payload.selectTypeValue}/${payload.inputValue}`;
    } else if (payload.inWookie === "false" && !payload.inputValue) {
      url = `http://localhost:8000/api/list/${payload.selectTypeValue}/?page=${payload.activePage}`;
    } else if (payload.inWookie === "true" && !payload.inputValue) {
      url = `http://localhost:8000/api/list/${payload.selectTypeValue}/?page=${payload.activePage}&format=wookiee`;
    } else if (payload.inWookie === "true" && payload.inputValue) {
      url = `http://localhost:8000/api/${payload.selectTypeValue}/${payload.inputValue}/?format=wookiee`;
    }

    console.log("url ", url);

    await axios
      .get(url)
      .then((response) => {
        actions.setResults({ data: response.data, url });
      })
      .catch((err) => {
        console.log("err ", err);
        actions.setResultsError(
          "La recherche n'a pas pu aboutir, merci de vérifier que l'ID que vous avez rentré est bien répertorié pour le type de ressource choisi !"
        );
      });
  }),
  setResults: action((state, payload) => {
    state.resultsError = null;
    state.results = payload.data;
    state.inputValue = "";
    if (payload.url.includes("list")) {
      state.resultsType = "array";
    } else {
      state.resultsType = "object";
    }
  }),
  setResultsError: action((state, payload) => {
    state.resultsError = payload;
    console.log(state.resultsError);
  }),
  resetSearch: action((state, payload) => {
    state.inWookie = "false";
    state.selectTypeValue = "films";
    state.results = null;
    state.resultsError = null;
    state.resultsType = "";
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
  setActivePage: action((state, payload) => {
    state.activePage = payload;
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
  logout: action((state, payload) => {
    state.loginError = "";
    state.username = "";
    state.password = "";
    state.results = null;
    state.resultsType = "";
    state.resultsError = null;
    state.selectTypeValue = "films";
    state.isAuthentified = false;
  }),
  loginSuccess: action((state, payload) => {
    state.isAuthentified = true;
  }),
  loginFail: action((state, payload) => {
    state.loginError = payload;
  }),
};

export default persist(defaultModel);
