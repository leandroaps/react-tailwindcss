import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="container mx-auto">
      <div className="text-center">
        <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white text-3xl">Welcome to React</h1>
        </header>
        <p className="text-base">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
}

export default App;
