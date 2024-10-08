import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

const App: React.FC = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

export default App;
