import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import GlobalContextWrap from "./hooks/useContext";
import "./index.css";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextWrap>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalContextWrap>
  </React.StrictMode>
);

reportWebVitals();
