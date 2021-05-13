import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
<<<<<<< HEAD
=======

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
