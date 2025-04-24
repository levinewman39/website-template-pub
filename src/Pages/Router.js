import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;