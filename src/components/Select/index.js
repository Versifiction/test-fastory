import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

function Select(props) {
  const [types] = useState([
    "films",
    "people",
    "planets",
    "species",
    "starships",
    "vehicles",
  ]);

  const selectTypeChange = useStoreActions(
    (actions) => actions.defaultModel.selectTypeChange
  );

  const toggleWookie = useStoreActions(
    (actions) => actions.defaultModel.toggleWookie
  );

  return (
    <div className="Select">
      {props.type === "type" ? (
        <select
          name={props.type}
          id={props.type}
          onChange={(e) => selectTypeChange(e.target.value)}
        >
          {types &&
            types.map((type) => (
              <option key={type} value={type}>
                {type === "films" && "Films"}
                {type === "people" && "Personnes"}
                {type === "planets" && "Planètes"}
                {type === "species" && "Espèces"}
                {type === "starships" && "Vaisseaux"}
                {type === "vehicles" && "Véhicules"}
              </option>
            ))}
        </select>
      ) : (
        <select
          name={props.type}
          id={props.type}
          onChange={(e) => {
            toggleWookie(e.target.value);
          }}
        >
          <option value="false">En format normal</option>
          <option value="true">En format Wookie</option>
        </select>
      )}
    </div>
  );
}

export default Select;
