import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

function Input() {
  const inputValue = useStoreState((state) => state.defaultModel.inputValue);
  const inputChange = useStoreActions(
    (actions) => actions.defaultModel.inputChange
  );

  return (
    <div className="Input">
      <input
        type="number"
        min="1"
        max="100"
        placeholder="Entrez un ID"
        onChange={(e) => inputChange(e.target.value)}
        value={inputValue}
      />
    </div>
  );
}

export default Input;
