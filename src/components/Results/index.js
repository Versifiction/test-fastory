import React from "react";
import moment from "moment";
import { useStoreActions, useStoreState } from "easy-peasy";

function Results() {
  const results = useStoreState((state) => state.defaultModel.results);
  const resetSearch = useStoreActions(
    (actions) => actions.defaultModel.resetSearch
  );

  return (
    <div className="Results">
      <p className="bold">{results.name}</p>
      <p>
        <span className="bold-desc">Population:</span> {results.population}
      </p>
      <p>
        <span className="bold-desc">Climat:</span> {results.climate}
      </p>
      <p>
        <span className="bold-desc">Diamètre:</span> {results.diameter} km
      </p>
      <p>
        <span className="bold-desc">Terrain:</span> {results.terrain}
      </p>
      <p>
        <span className="bold-desc">Gravité:</span> {results.gravity}
      </p>
      <p>
        <span className="bold-desc">Crée le:</span>{" "}
        {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
      </p>
      <p>
        <span className="bold-desc">Édité le:</span>{" "}
        {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
      </p>
      <p>
        <span className="bold-desc">URL:</span>{" "}
        <a href={results.url} target="_blank" rel="noopener noreferrer">
          {results.url}
        </a>
      </p>
      <button onClick={resetSearch}>Faire une nouvelle recherche</button>
    </div>
  );
}

export default Results;
