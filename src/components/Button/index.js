import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

function Button() {
  const inputValue = useStoreState((state) => state.defaultModel.inputValue);
  const selectTypeValue = useStoreState(
    (state) => state.defaultModel.selectTypeValue
  );
  const inWookie = useStoreState((state) => state.defaultModel.inWookie);
  const getResults = useStoreActions(
    (actions) => actions.defaultModel.getResults
  );

  return (
    <div className="Button">
      <button
        onClick={() => getResults({ selectTypeValue, inputValue, inWookie })}
      >
        Rechercher
      </button>
    </div>
  );
}

export default Button;
