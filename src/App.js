import React from "react";
import "./App.css";
import Converters from "./Converters";
import Converter from "./Converter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Converters
          render={obj => (
            <>
              <Converter currency="usd" {...obj} />
              <Converter currency="cad" {...obj} />
            </>
          )}
        ></Converters>
      </header>
    </div>
  );
}

export default App;
