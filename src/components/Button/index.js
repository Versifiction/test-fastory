import React from "react";
import classnames from "classnames";
import { useStoreState, useStoreActions } from "easy-peasy";

function Button(props) {
  const inputValue = useStoreState((state) => state.defaultModel.inputValue);
  const selectTypeValue = useStoreState(
    (state) => state.defaultModel.selectTypeValue
  );
  const username = useStoreState((state) => state.defaultModel.username);
  const password = useStoreState((state) => state.defaultModel.password);
  const inWookie = useStoreState((state) => state.defaultModel.inWookie);
  const activePage = useStoreState((state) => state.defaultModel.activePage);
  const getResults = useStoreActions(
    (actions) => actions.defaultModel.getResults
  );
  const login = useStoreActions((actions) => actions.defaultModel.login);
  const logout = useStoreActions((actions) => actions.defaultModel.logout);
  const resetSearch = useStoreActions(
    (actions) => actions.defaultModel.resetSearch
  );

  return (
    <div className="Button">
      {props.type === "search" && (
        <button
          className={classnames(
            { disabled: !inputValue || !selectTypeValue },
            "btn-large"
          )}
          onClick={() =>
            getResults({ selectTypeValue, inputValue, inWookie, activePage })
          }
        >
          {props.value}
        </button>
      )}
      {props.type === "login" && (
        <button
          className="btn-large"
          onClick={() => login({ username, password })}
        >
          {props.value}
        </button>
      )}
      {props.type === "logout" && (
        <button onClick={logout} className="btn-large Button-Disconnect">
          {props.value}
        </button>
      )}
      {props.type === "new-search" && (
        <button onClick={resetSearch} className="btn-large">
          {props.value}
        </button>
      )}
    </div>
  );
}

export default Button;
