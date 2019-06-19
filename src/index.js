import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from "redux";
import reducer from "./redux/Calendar/calendarReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

const store = createStore(reducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

const mapper = items => {
  return items.map(({ id, selfLink: link, ...props }) => ({
    id,
    link,
    ...props
  }));
};
