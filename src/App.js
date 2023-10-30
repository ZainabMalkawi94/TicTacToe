// App.js
import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
