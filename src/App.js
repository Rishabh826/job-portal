import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Navebar from './components/Navebar';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Home from './components/Home';
import Postajob from './components/Postajob';

const NavebarWithConditionalRender = () => {
  const location = useLocation();
  const shouldRenderNavebar = location.pathname !== '/Postajob'; // Check if current route is not Postajob

  return shouldRenderNavebar ? <Navebar /> : null;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavebarWithConditionalRender /> {/* Render Navebar conditionally */}
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Postajob" element={<Postajob />} />
          <Route path="/Ioperson" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ContactUs" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
