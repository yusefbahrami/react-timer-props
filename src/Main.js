import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./Timer";
import "./style.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Clock</h1>
        <Timer />
      </div>
    );
  }
}
export default Main;
