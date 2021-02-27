import React, { Component } from "react";

class Operator extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-success btn-lg m-1"
        style={{paddingRight:20, paddingLeft:20}}
        onClick={() => this.props.onHandleOperator(this.props.op.value)}
      >
        {this.props.op.value}
      </button>
    );
  }
}

export default Operator;
