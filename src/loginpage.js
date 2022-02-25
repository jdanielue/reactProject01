import React, { useState } from "react";
import useMessage from "./hooks/useMessage";

function Login() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [loginMessage, infologin] = useMessage();


  function Message(props) {
    return <h3>{loginMessage}</h3>;
  }
  function clear() {
    setPswd("");
    setName("");
    // setSubmitMessage("");
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
      <button onClick={() => infologin(name, pswd)} name={name} pswd={pswd}>
        Submit
      </button>
      <button
        onClick={() => clear()}
        name={name}
        pswd={pswd}
        // submitMessage={submitMessage}
      >
        Clear
      </button>
      <Message />
    </div>
  );
}

export default Login;
