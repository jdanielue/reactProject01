import React, { useState, useEffect } from "react";
import useMessage from "./hooks/useMessage";

function Login() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [loginMessage, setLoginMessage, infologin] = useMessage();

  useEffect(() => {
    infologin(name, pswd);
    console.log("useEffect no dependency");
  });

  function Message(props) {
    return <h3>{loginMessage}</h3>;
  }
  function clear() {
    setPswd("");
    setName("");
    setLoginMessage("");
  }

  function submitMessage() {
    setLoginMessage("thanks for click me");
  }
  return (
    <div>
      <p>name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>pswd</p>
      <input
        type="text"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
      ></input>
      <Message />
      <button onClick={() => clear()} name={name} pswd={pswd}>
        Clear
      </button>
      <button onClick={() => submitMessage()}>Submit</button>
    </div>
  );
}

export default Login;
