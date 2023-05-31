import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './store/store.js';    //from react redux
import { Provider } from "react-redux"; //from react redux
ReactDOM.createRoot(document.getElementById("root")).render(
  // connecting redux with our app
  <Provider store={store}>
    <App />
  </Provider>
);
