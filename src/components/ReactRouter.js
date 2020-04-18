import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

class ReactRouterPractice extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Show</h1>
        <Route path="/home" render={() => <h1>HOME</h1>} />
        <Route path="/weather" render={() => <h1>WEATHER</h1>} />
      </BrowserRouter>
    );
  }
}

export default ReactRouterPractice;
