import React from "react";
import { useStoreActions } from "easy-peasy";

function Input(props) {
  const inputTypeChange = useStoreActions(
    (actions) => actions.defaultModel.inputTypeChange
  );
  const usernameChange = useStoreActions(
    (actions) => actions.defaultModel.usernameChange
  );
  const passwordChange = useStoreActions(
    (actions) => actions.defaultModel.passwordChange
  );

  return (
    <div className="Input">
      {props.name === "id" && (
        <input
          type={props.type}
          name={props.name}
          min="1"
          max="100"
          placeholder={props.placeholder}
          onChange={(e) => inputTypeChange(e.target.value)}
        />
      )}
      {props.name === "username" && (
        <input
          type={props.type}
          name={props.name}
          min="1"
          max="100"
          placeholder={props.placeholder}
          onChange={(e) => usernameChange(e.target.value)}
        />
      )}
      {props.name === "password" && (
        <input
          type={props.type}
          name={props.name}
          min="1"
          max="100"
          placeholder={props.placeholder}
          onChange={(e) => passwordChange(e.target.value)}
        />
      )}
    </div>
  );
}

export default Input;
