import React, { Component } from 'react';

const equalButton = (props) => {
    return (
        <button
        className="btn btn-outline-primary btn-lg m-1"
        style={{paddingRight:20, paddingLeft:20}}
        onClick={props.onHandleEqual}
      >
      =
      </button>
    );
}
 
export default equalButton;