import React from "react";

import "./App.css";

import Sidebar from "./components/Sidebar/sidebar";
import Main from "./components/Main/main";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
