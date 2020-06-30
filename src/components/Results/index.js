import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

function Results() {
  const results = useStoreState((state) => state.defaultModel.results);
  const resetSearch = useStoreActions(
    (actions) => actions.defaultModel.resetSearch
  );

  return (
    <div className="Results">
      <p>{results.name}</p>
      <p>{results.height}</p>
      <p>{results.mass}</p>
      <p>{results.eye_color}</p>
      <button onClick={resetSearch}>Faire une nouvelle recherche</button>
    </div>
  );
}

export default Results;
