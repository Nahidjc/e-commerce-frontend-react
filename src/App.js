import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Payment } from './components/Payment/Payment';
import SignUp from './components/Signup/Signup';
import SuccessPayment from './components/SuccessPayment/SuccessPayment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deposit" element={<Payment />} />
          <Route path="/payment/successful" element={<SuccessPayment />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
