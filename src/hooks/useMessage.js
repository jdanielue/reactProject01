import { useState } from "react";

const useMessage = () => {
  const [loginMessage, setLoginMessage] = useState("");

  function infologin(name, pswd) {
    if (name.length < 5 && name.length > 0) {
      setLoginMessage(" Name less than 5 characteres");
    } else if (pswd.length < 5  && pswd.length > 0) {
      setLoginMessage(" Pasword less than 5 characteres");
    } else if (pswd.length > 5  && name.length > 5){
      setLoginMessage(" Password and name are corrects");
    } else {
      setLoginMessage("")
    }
  };

  return [loginMessage, setLoginMessage, infologin];
};

export default useMessage;
