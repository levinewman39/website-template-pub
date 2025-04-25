import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import GetInvolved from './Get_Involved.jsx';
import Our_Work from './Our_Work.jsx';
import About from './About.jsx';
import BulletIn from './Bulletin.jsx';
import Community_Links from './Community_Links.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Get Involved" element={<GetInvolved />} />
        <Route path="/Our Work" element={<Our_Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bulletin" element={<BulletIn />} />
        <Route path="/Community Links" element={<Community_Links />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;