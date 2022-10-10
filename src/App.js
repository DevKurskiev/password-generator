import React, { useState } from "react";

import PasswordOutput from "./components/passwordOutput";
import PasswordSettings from "./components/passwordSettings";

function App() {
  const [passwordLength, setPasswordLength] = useState(3);
  const [password, setPassword] = useState("Generate...");

  return (
    <div className="App">
      <PasswordOutput passwordValue={password} />
      <PasswordSettings
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
