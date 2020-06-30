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
        type="text"
        placeholder="Entrez un ID"
        onChange={(e) => inputChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
