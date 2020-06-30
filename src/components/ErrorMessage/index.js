import React from "react";
import { useStoreState } from "easy-peasy";

function ErrorMessage() {
  const loginError = useStoreState((state) => state.defaultModel.loginError);

  return (
    <div className="Error-Message">
      <p className="color-red">{loginError}</p>
    </div>
  );
}

export default ErrorMessage;
