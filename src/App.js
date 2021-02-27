import React, { Component } from "react";
import "./App.css";
import ResultBar from "./components/resultBar";
import Numbers from "./components/numbers";
import Operators from "./components/operators";
import Equal from "./components/equalButton";
import Deletes from "./components/deletes";


class App extends Component {
  state = {
    nums: [
      { id: 1, value: "1" },
      { id: 2, value: "2" },
      { id: 3, value: "3" },
      { id: 4, value: "4" },
      { id: 5, value: "5" },
      { id: 6, value: "6" },
      { id: 7, value: "7" },
      { id: 8, value: "8" },
      { id: 9, value: "9" },
      { id: 0, value: "0" },
      {id: 10, value: "."},
    ],

    ops: [
      { id: 1, value: "+" },
      { id: 2, value: "-" },
      { id: 3, value: "x" },
      { id: 4, value: "/" },
    ],

    dels: [
      { id: 1, value: "CE" },
      { id: 2, value: "C" },
      { id: 3, value: "<--" },
    ],

    text: "",
    storedValue: "",
    currentOp: null,
  };

  handleNumber = (num) => {
    if(num == "." && this.state.text.indexOf(".") != -1){
      num = "";
    }
    const text = this.state.text + num;
    this.setState({ text });
  };

  handleOperator = (op) => {
    const currentOp = op;
    const curText = this.state.text;

    if (this.state.storedValue == "") {
      this.setState({ currentOp, storedValue: curText, text: "" });
    } else if (this.state.text != "") {
      const storedValue = eval(
        this.state.storedValue + this.state.currentOp + this.state.text
      );
      this.setState({ currentOp, storedValue, text: "" });
    }
  };

  handleDelete = (del) =>{ 
    let text;
    let storedValue = this.state.storedValue;
    switch (del.id) {
      case 1:
        text = "";
        break;
      case 2:
        text = "";
        storedValue = "";
        break
      case 3:
        text = this.state.text.toString().slice(0, -1);
        break;      
    }
    this.setState({text, storedValue});  
  }

  handleEqual = () => {
    if(this.state.storedValue != "" && this.state.text != "") {
      const total = eval(
        this.state.storedValue + this.state.currentOp + this.state.text
      );
      this.setState({ storedValue: "", currentOp: null, text: total });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ResultBar
          text={this.state.text}
          operator={this.state.currentOp}
          storedValue={this.state.storedValue}
        />
        <div className="container" style={{ paddingLeft: 20 }}>
          <Numbers nums={this.state.nums} onHandleNumber={this.handleNumber} />
          <Operators
            ops={this.state.ops}
            onHandleOperator={this.handleOperator}
          />
          <Deletes dels={this.state.dels} onHandleDelete={this.handleDelete}/>
          <Equal
            onHandleEqual={this.handleEqual}
            storedValue={this.state.storedValue}
            currentOp={this.state.currentOp}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
