import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // `state` is the internal data store of a component. it's just a plain ol' javascript object
      value: 0,
    };
  }

  render() {
    let displayValue = this.state.value;
    if (this.state.value !== 0) {
      if (this.state.value % 3 === 0 && this.state.value % 5 === 0)
        displayValue = "FizzFuzz";
      else if (this.state.value % 3 === 0) displayValue = "Fizz";
      else if (this.state.value % 5 === 0) displayValue = "Fuzz";
    }

    return (
      <div>
        <p>{displayValue}</p>
        <button onClick={this.IncrCount}>Increase count</button>
        <button onClick={this.DecrCount}>Decrease count</button>
      </div>
    );
  }

  IncrCount = () => {
    this.setState({ value: this.state.value + 1 });
  };

  DecrCount = () => {
    this.setState({ value: this.state.value - 1 });
  };
}

export default Counter;
