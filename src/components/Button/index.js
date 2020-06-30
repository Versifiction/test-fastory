import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

function Button(props) {
  const inputValue = useStoreState((state) => state.defaultModel.inputValue);
  const selectTypeValue = useStoreState(
    (state) => state.defaultModel.selectTypeValue
  );
  const username = useStoreState((state) => state.defaultModel.username);
  const password = useStoreState((state) => state.defaultModel.password);
  const inWookie = useStoreState((state) => state.defaultModel.inWookie);
  const getResults = useStoreActions(
    (actions) => actions.defaultModel.getResults
  );
  const login = useStoreActions((actions) => actions.defaultModel.login);
  const logout = useStoreActions((actions) => actions.defaultModel.logout);

  return (
    <div className="Button">
      {props.type === "search" && (
        <button
          onClick={() => getResults({ selectTypeValue, inputValue, inWookie })}
        >
          {props.value}
        </button>
      )}
      {props.type === "login" && (
        <button onClick={() => login({ username, password })}>
          {props.value}
        </button>
      )}
      {props.type === "logout" && (
        <button onClick={logout} className="Button-Disconnect">
          {props.value}
        </button>
      )}
    </div>
  );
}

export default Button;
