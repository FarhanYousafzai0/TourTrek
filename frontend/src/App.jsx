import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './Pages/admin/AdminLayout';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
