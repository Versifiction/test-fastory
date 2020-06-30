import React from "react";
import { useStoreState } from "easy-peasy";

import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import Results from "./components/Results";
import "./App.css";

function App() {
  const results = useStoreState((state) => state.defaultModel.results);

  return (
    <div className="App">
      {!results ? (
        <>
          <Input />
          <Select />
          <Button />
        </>
      ) : (
        <Results />
      )}
    </div>
  );
}

export default App;
