import React from "react";
import ReactDOM from "react-dom/client";
class Timer extends React.Component {
  render() {
    return (
      <div className="btns">
        <button onClick={this.props.startInterval}>Start</button>
        <button onClick={this.props.stopInterval}>Stop</button>
      </div>
    );
  }
}
export default Timer;
