import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import Jobs from './components/Jobs';
import Aboutus from './components/Aboutus';
import Privacypolicy from './components/Privacypolicy';
import TermsConditions from './components/TermsConditions';
import Hackathons from './components/Hackathons';
import QuizzesFestivals from './components/QuizzesFestivals';
import Studyroom from './components/Studyroom';
const NavebarWithConditionalRender = () => {
  const location = useLocation();
  const shouldRenderNavebar = location.pathname !== '/Postajob'; // Check if current route is not Postajob

  return shouldRenderNavebar ? <Navebar /> : null;
};

const App = () => {
  return (
    <div>
      <HashRouter>
        <NavebarWithConditionalRender /> {/* Render Navebar conditionally */}
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/studyroom" element={<Studyroom />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Postajob" element={<Postajob />} />
          <Route path="/Ioperson" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Practice" element={<Practice />} />
          <Route path="/Compete" element={<Compete />} />
          <Route path="/Mentorship" element={<Mentorship />} />
          <Route exact path="/PrivacyPolicy" element={<Privacypolicy />} />
          <Route exact path="/Termscondition" element={<TermsConditions />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/onlinehackathons" element={<Hackathons />} />
          <Route path="/quizzesfestival" element={<QuizzesFestivals />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
