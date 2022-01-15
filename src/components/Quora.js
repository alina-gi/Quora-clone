import React from "react";
import Header from "./Header"
import Feed from "./Feed.js";
import "./Quora.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Quora() {
  return (
    <div className="quora">
      <Header />
      <div className="home_container">
      <div className="quora__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      </div>
      </div>

  );
}

export default Quora;
