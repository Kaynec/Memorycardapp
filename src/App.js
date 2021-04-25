import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import "./styles/reset.css";
import Header from "./component/header";
import Gameboard from "./component/gameboard";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.onload = (event) => {
      setLoading(false);
    };
  }, []);
  if (loading === true) {
    return (
      <div
        style={{ margin: "30%" + "auto", width: "100%" }}
        className="loading"
      >
        Loading The Website ,Please Wait ...
      </div>
    );
  } else if (loading === false) {
    return (
      <>
        <Header />
        <Gameboard />
      </>
    );
  }
};
export default App;
