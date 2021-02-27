import React, { Component } from "react";
import PreviewBar from "./previewBar";

class resultBar extends Component {
  //if nothing in there, color grey
  render() {
    return (
      <div className="container">
        <span
          className="badge badge-success ml-2 mt-1"
          style={{ fontSize: 20 }}
        >
          {this.props.operator}
        </span>
        <PreviewBar storedValue={this.props.storedValue}/>
        <nav className="navbar navbar-dark bg-dark m-2">
          <span className="navbar-brand mb-0 h1">{this.props.text}</span>
        </nav>
      </div>
    );
  }
}

export default resultBar;
