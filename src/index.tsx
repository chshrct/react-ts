import React from "react";
import "./index.css";
import store from "./redux/redux-store";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

