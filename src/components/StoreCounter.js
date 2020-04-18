import React from "react";
import { connect } from "react-redux";

class StoreCounter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <h2> Counter</h2>
        <div>
          <button onClick={this.decrement}>-1</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+1</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(StoreCounter);
