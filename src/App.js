import React from "react";
import "./App.css";
import Converters from "./Converters";
import Converter from "./Converter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Converters>
          <Converter currency="usd" />
          <Converter currency="cad" />
        </Converters>
      </header>
    </div>
  );
}

export default App;
