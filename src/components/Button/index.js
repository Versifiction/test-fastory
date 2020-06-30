import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

function Button() {
  const inputValue = useStoreState((state) => state.defaultModel.inputValue);
  const selectValue = useStoreState((state) => state.defaultModel.selectValue);
  const getResults = useStoreActions(
    (actions) => actions.defaultModel.getResults
  );

  return (
    <div className="Button">
      <button onClick={() => getResults({ selectValue, inputValue })}>
        Rechercher
      </button>
    </div>
  );
}

export default Button;
