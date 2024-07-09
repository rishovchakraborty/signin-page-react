import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/signin.jsx';
import LoginPage from './components/login/login.jsx';
import SignInPage from './components/signin/signin.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
