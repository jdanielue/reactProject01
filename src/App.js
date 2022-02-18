function App() {

  function Message(props) {
    console.log("submit button is working")
  }
  return (
    <div>
      <p>name</p>
      <input></input>
      <p>pswd</p>
      <input></input>
      <button onClick={Message}>Submit</button>
    </div>
  );
}

export default App;
