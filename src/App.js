import React from "react";
import { useStoreState } from "easy-peasy";

import Title from "./components/Title";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Results from "./components/Results";
import Copyright from "./components/Copyright";
import "./App.css";

function App() {
  const results = useStoreState((state) => state.defaultModel.results);

  return (
    <div className="App">
      <Title />
      {!results ? (
        <div className="Form">
          <Input />
          <Select type="type" />
          <Select type="wookie" />
          <Button />
        </div>
      ) : (
        <Results />
      )}
      <Copyright />
    </div>
  );
}

export default App;
