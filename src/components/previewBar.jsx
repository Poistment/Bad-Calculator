import React, { Component } from "react";

class PreviewBar extends Component {
  render() {
    return (
      <span className="border border-success m-2 rounded" style={{ fontSize: 20 }}>
        {this.props.storedValue}
      </span>
    );
  }
}

export default PreviewBar;
