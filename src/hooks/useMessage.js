import { useState } from "react";

const useMessage = () => {
  const [loginMessage, setLoginMessage] = useState("");

  function infologin(name, pswd) {
    if (name.length < 5) {
      setLoginMessage(" Name less than 5 characteres");
    } else if (pswd.length < 5) {
      setLoginMessage(" Pasword less than 5 characteres");
    } else {
      setLoginMessage(" Password and name are corrects");
    }
  };

  return (loginMessage, infologin);
};

export default useMessage;
