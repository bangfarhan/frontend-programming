import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import Browser Router dari React Router
import { BrowserRouter } from "react-router-dom";
// Import Provider: untuk menghubungkan React dan Redux.
import { Provider } from "react-redux";
import store from "./store";

/**
 * Menghubungkan React dan Redux.
 * Bungkus App dengan Provider.
 * Agar Component dapat mengakses Store.
 */
ReactDOM.render(
  <React.StrictMode>
    {/*
     * Bungkus/Hubungkan Aplikasi dengan Browser Router.
     * Agar URL browser dapat dimanipulasi oleh React Router
     */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
