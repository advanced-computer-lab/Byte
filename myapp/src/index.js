// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'
// import { render } from 'react-dom'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import'bootstrap/dist/css/bootstrap.css';
import {Home,Seats,Navigation,} from './Component';

ReactDOM.render(<Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seats" element={<Seats />} />
    </Routes>
  </Router>,
document.getElementById("root"));
