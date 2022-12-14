import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import NewEmployeeView from './Views/NewEmployeeView.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// Add the Payroll Employee Add new routes in here.

  <Router>
    <div>
      <Routes>
        <Route element={<NewEmployeeView />} exact path="/payroll/employeeinformation/newemployee" />
      </Routes>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
