import React, { Component } from "react";
import Delete from "./delete";

class Deletes extends Component {
  render() {
    return (
      <div>
        {this.props.dels.map(del => (
          <Delete
            key={del.id}
            del={del}
            onHandleDelete={this.props.onHandleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Deletes;
