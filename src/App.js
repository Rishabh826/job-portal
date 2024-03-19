import './App.css';
import Login from './components/Login';
import Navebar from './components/Navebar'; 
import Signup from './components/Signup';
import Contact from './components/Contact'; 
import Home from './components/Home'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navebar />
        
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Ioperson" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/ContactUs" element={<Contact />} /> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}
