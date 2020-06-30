import React from "react";
import { useStoreState } from "easy-peasy";

function Results() {
  const results = useStoreState((state) => state.defaultModel.results);

  return (
    <div className="Results">
      {results}
      <button>Faire une nouvelle recherche</button>
    </div>
  );
}

export default Results;
