import React from "react";
import { useStoreActions } from "easy-peasy";

function Input() {
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
