import React, { useRef } from "react";

import copyIcon from "../../icons/copy.svg";
import "./styles.css";

function PasswordOutput({ passwordValue }) {
  const password = useRef();

  return (
    <div
      className="container"
      onClick={(e) => {
        password.current.select();
        document.execCommand("copy");
      }}
    >
      <h1>Password Generator</h1>
      <div className="parent">
        <input
          className="output"
          value={passwordValue}
          readOnly
          ref={password}
        />
        <img src={copyIcon} alt="copy" />
      </div>
    </div>
  );
}

export default PasswordOutput;
