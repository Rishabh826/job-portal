 

import './App.css';
import Login from './components/Login';
import Navbar from './components/Navebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/Ioperson" element={<Login/>} />
        <Route exact path="/Signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
 
    </div>
     );
    }