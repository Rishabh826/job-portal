import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Navebar from './components/Navebar';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Home from './components/Home';
import Learn from './components/Learn';
import Postajob from './components/Postajob';
import Practice from './components/Practice';
import Compete from './components/Compete';
import Mentorship from './components/Mentorship';
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
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/Compete" element={<Compete />} />
          <Route path="/Mentorship" element={<Mentorship />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
