import * as React from "react";
import * as ReactDOM from "react-dom";
import { HelloWorldContainer, NameEditContainer } from "./components";
import { createStore } from "redux";

import { Provider } from "react-redux";

import { reducers } from "./reducers";

const store = createStore(
  reducers,
  window["__REDUX_DEVTOOLS_EXTENSION__"] &&
    window["__REDUX_DEVTOOLS_EXTENSION__"]()
);

ReactDOM.render(
  <Provider store={store}>
    <HelloWorldContainer />
    <NameEditContainer />
  </Provider>,
  document.getElementById("root")
);
