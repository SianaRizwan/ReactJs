import React, { Component } from "react";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log("Mounted");
    // this.setState({counter: this.props.value})
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
        <h1>Counter</h1>
        <button
          onClick={() => {
            this.setState((state) => ({ counter: this.state.counter + 1 }));
          }}
        >
          Inc
        </button>{" "} 
        <span style={{ fontSize: "26px", color: "Red" }}>
          {this.state.counter}
        </span>{" "}
        <button
          onClick={() => {
            this.setState((state) => ({ counter: state.counter - 1 }));
          }}
        >
          Dec
        </button>
      </div>
    );
  }
}

export default Food;
