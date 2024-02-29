// import React from "react";
// import  ReactDOM  from "react-dom";
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Provider } from 'react-redux';

// import App from './App';
// // import 'antd/dist/antd.css';
// import store from './app/store';

// ReactDOM.render(
//     <Router>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </Router>, 
//     document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
// import 'antd/dist/antd.css';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);


