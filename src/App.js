import React from "react";
import Header from "./components/container/HeaderContainer";
import { Redirect, Route, Switch } from "react-router-dom";
import CalendarContainer from "./components/container/CalendarContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/:format" component={CalendarContainer} />
          <Redirect to="/month" />
        </Switch>
      </div>
    );
  }
}

export default App;
