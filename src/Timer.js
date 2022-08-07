import React from "react";
import ReactDOM from "react-dom/client";

var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 60,
    };
  }
  startIntervalFunction = () => {
    interval = setInterval(() => {
      this.setState({
        second: this.state.second - 1,
      });
    }, 1000);
  };

  stopIntervalFunction = () => {
    clearInterval(interval);
  };

  componentDidMount() {
    this.startIntervalFunction();
  }
  componentDidUpdate() {
    if (this.state.second === 0) {
      this.stopIntervalFunction();
    }
  }
  render() {
    return (
      <>
        <h2 className="timer">{this.state.second}</h2>
        <div className="btns">
          <button onClick={this.startIntervalFunction}>Start</button>
          <button onClick={this.stopIntervalFunction}>Stop</button>
        </div>
      </>
    );
  }
}
export default Timer;
