import React, { Component } from "react";
import Number from "./number";

class Numbers extends Component {
  render() {
    return (
      <div>
        {this.props.nums.map((num) => (
          <Number
            key={num.id}
            num={num}
            onHandleNumber={this.props.onHandleNumber}
          />
        ))}
      </div>
    );
  }
}

export default Numbers;
