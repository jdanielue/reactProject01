import React, {Fragment, useState} from 'react';


function App() {
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const [info, setInfo] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  

  function infologin(props) {
    setInfo(false);
    if (name.length < 5) {
      alert(" Name less than 5 characteres")
    } else if (pswd.length < 5){
      alert(" Pasword less than 5 characteres")
    } else {
      setInfo(true)
      return
    }
  }

  function Message (params) {
    setSubmitMessage("password and name are corrrect");
    return (<h3>{submitMessage}</h3>)
  }

  function clear(props) {
    setPswd("");
    setName("");
    setSubmitMessage("");
  }
  return (
    <Fragment>
      <p>name</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>pswd</p>
      <input type="text" value={pswd} onChange={(e) => setPswd(e.target.value)}></input>
      <button onClick={infologin} name={name} pswd={pswd}>Submit</button>
      <button onClick={clear} name={name} pswd={pswd}>Clear</button>
      { info ? <Message /> : null }
    </Fragment>
  );
}

export default App;
