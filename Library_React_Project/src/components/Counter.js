import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 10, number: 10, price: 12.3 };
  }
  componentDidMount() { 
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  render() {
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            this.setState((state) => ({ counter: state.counter + 1 }));
            // console.log("incremented");
          }}
        >
          Increment
        </button>{" "}
        <span style={{ color: "red", fontSize: "30px" }}>
          {" "}
          {this.state.counter}{" "}
        </span>{" "}
        <button
          className="button"
          onClick={() => {
            this.setState((state) => ({ counter: state.counter - 1 }));
            // console.log("Decremented");
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
