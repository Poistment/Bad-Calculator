import React, { Component } from "react";
import Operator from "./operator";

class Operators extends Component {
  render() {
    return (
      <div>
        {this.props.ops.map((op) => (
          <Operator key={op.id} op={op} onHandleOperator={this.props.onHandleOperator} />
        ))}
      </div>
    );
  }
}

export default Operators;
