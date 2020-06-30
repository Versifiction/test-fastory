import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

function Select() {
  const [types] = useState([
    "films",
    "people",
    "planets",
    "species",
    "starships",
    "vehicles",
  ]);

  const selectValue = useStoreState((state) => state.defaultModel.selectValue);
  const selectChange = useStoreActions(
    (actions) => actions.defaultModel.selectChange
  );

  return (
    <div className="Select">
      <select
        name="type"
        id="type-select"
        onChange={(e) => selectChange(e.target.value)}
        value={selectValue}
      >
        <option value="">--Choisissez une option--</option>
        {types &&
          types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;
