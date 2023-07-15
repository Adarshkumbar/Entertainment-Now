import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './store/store.js';    //from react redux
import { Provider } from "react-redux"; //from react redux
// const protobufjs = require("protobufjs");

// protobufjs.util.setProperty(Object.prototype, "protobufjs", null);
ReactDOM.createRoot(document.getElementById("root")).render(
  // connecting redux with our app
  <Provider store={store}>
    <App />
  </Provider>
);
