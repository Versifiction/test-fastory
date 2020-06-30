import React, { useEffect } from "react";
import { useStoreState } from "easy-peasy";
import M from "materialize-css";

import Nav from "./components/Nav";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import ErrorMessage from "./components/ErrorMessage";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Results from "./components/Results";
import Copyright from "./components/Copyright";
import "./App.css";

function App() {
  const results = useStoreState((state) => state.defaultModel.results);
  const selectTypeValue = useStoreState(
    (state) => state.defaultModel.selectTypeValue
  );
  const username = useStoreState((state) => state.defaultModel.username);
  const password = useStoreState((state) => state.defaultModel.password);
  const isAuthentified = useStoreState(
    (state) => state.defaultModel.isAuthentified
  );
  const loginError = useStoreState((state) => state.defaultModel.loginError);

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Title />
        {!isAuthentified ? (
          <div className="Form">
            <Subtitle value="Connexion" />
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Entrez le nom d'utilisateur"
            />
            <Input
              type="text"
              name="password"
              value={password}
              placeholder="Entrez le mot de passe"
            />
            {loginError !== "" && <ErrorMessage />}
            <Button type="login" value="Se connecter" />
          </div>
        ) : (
          <>
            {!results ? (
              <div className="Form">
                <Subtitle value="Recherche" />
                <Input
                  type="number"
                  name="id"
                  value={selectTypeValue}
                  placeholder="Entrez un ID"
                />
                <Select type="type" />
                <Select type="wookie" />
                <Button type="search" value="Rechercher" />
              </div>
            ) : (
              <Results />
            )}{" "}
          </>
        )}

        <Copyright />
      </div>
    </div>
  );
}

export default App;
