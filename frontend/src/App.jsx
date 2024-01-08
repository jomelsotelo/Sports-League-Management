import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavigationBar from './components/Header';
import Login from './pages/auth/Login';
import RegisterForm from './pages/auth/RegisterForm';
import Homepage from './pages/Homepage'

function App() {
  return (
    <Router>
      <div>
        <NavigationBar/>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Homepage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

 
 export default App;