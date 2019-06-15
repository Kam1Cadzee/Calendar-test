import React from "react";
import Header from "./components/container/HeaderContainer";
import { Route, Switch } from "react-router-dom";
import CalendarContainer from "./components/container/CalendarContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/:format" component={CalendarContainer} />
      </div>
    );
  }
}

export default App;
