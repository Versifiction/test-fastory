import React, { useState } from "react";

function Select() {
  const [types] = useState([
    "films",
    "people",
    "planets",
    "species",
    "starships",
    "vehicles",
  ]);
  return (
    <div className="Select">
      <select name="type" id="type-select">
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
