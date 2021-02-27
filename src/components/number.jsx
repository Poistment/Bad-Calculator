import React, { Component } from "react";

class Number extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-dark btn-lg m-1"
        onClick={() => this.props.onHandleNumber(this.props.num.value)}
      >
        {this.props.num.value}
      </button>
    );
  }
}

export default Number;
