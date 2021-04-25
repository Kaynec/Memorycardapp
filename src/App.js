import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import "./styles/reset.css";
import Header from "./component/header";
import Gameboard from "./component/gameboard";
const App = () => {
  return (
    <>
      <Header />
      <Gameboard />
    </>
  );
};
export default App;
