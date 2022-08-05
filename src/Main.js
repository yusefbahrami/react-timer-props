import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./Timer";
import "./style.css";

let interval;
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 60,
    };
  }
  startInterval = () => {
    interval = setInterval(() => {
      this.setState({
        second: this.state.second - 1,
      });
    }, 1000);
  };

  stopInterval = () => {
    clearInterval(interval);
  };

  componentDidUpdate() {
    if (this.state.second === 0) {
      this.stopInterval();
      this.state.second=60
    }
  }
  render() {
    return (
      <div className="main">
        <h1>Clock</h1>
        <h2>{this.state.second}</h2>
        <Timer
          startInterval={this.startInterval}
          stopInterval={this.stopInterval}
        />
      </div>
    );
  }
}
export default Main;
