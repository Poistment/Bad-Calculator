import React, { Component } from "react";

class Delete extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-danger btn-lg m-1"
        style={{ paddingRight: 20, paddingLeft: 20 }}
        onClick={() => this.props.onHandleDelete(this.props.del)}
      >
        {this.props.del.value}
      </button>
    );
  }
}

export default Delete;
