import React from "react";
import { useStoreActions } from "easy-peasy";

function Button() {
  const getResults = useStoreActions(
    (actions) => actions.defaultModel.getResults
  );

  return (
    <div className="Button">
      <button onClick={getResults}>Rechercher</button>
    </div>
  );
}

export default Button;
