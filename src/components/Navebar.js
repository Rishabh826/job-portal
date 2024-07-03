import React from 'react';
import { IoPerson } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { FaBookReader } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";

const Navebar = () => {
  const location = useLocation();

  // Define the inline style for the navbar
  const navStyle = {
    background: location.pathname === '/PrivacyPolicy'
      ? 'linear-gradient(30deg, #FF6600, #FA8131)'
      : 'linear-gradient(30deg, rgb(13, 153, 181), rgb(8, 210, 250))',
  };

  // Debugging: Log the location and the applied styles
  console.log('Current Path:', location.pathname);
  console.log('Applied Nav Style:', navStyle);

  return (
    <div>
      <nav className="navbar navbar-dark fixed-top" style={navStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: '30px' }}>
            <strong>JobHunting.com</strong>
          </Link>

          <div className="d-flex justify-content-end align-items-center" style={{ width: '70%' }}>
            <Link className="nav-link me-4" to="/Learn">
              <FaBookReader style={{ color: 'white', fontSize: '30px' }} />
              <p style={{ color: 'white' }}>Learn</p>
            </Link>

            <Link className="nav-link me-4" to="/Practice">
              <TbTargetArrow style={{ color: 'white', fontSize: '30px' }} />
              <p style={{ color: 'white' }}>Practice</p>
            </Link>

            <Link className="nav-link me-4" to="/Postajob">
              <HiOutlineSpeakerphone style={{ color: 'white', fontSize: '30px' }} />
              <p style={{ color: 'white' }}>Host</p>
            </Link>

            <Link className="nav-link me-4" to="/jobs">
              <GiSchoolBag style={{ color: 'white', fontSize: '30px' }} />
              <p style={{ color: 'white' }}>Jobs</p>
            </Link>

            <Link className="nav-link me-4" to="/Compete">
              <FaRankingStar style={{ color: 'white', fontSize: '30px' }} />
              <p style={{ color: 'white' }}>Compete</p>
            </Link>

            <Link className="nav-link me-4" to="/Mentorship">
              <HiLightBulb style={{ color: 'white', fontSize: '30px' }} />
              <p style={{ color: 'white' }}>Mentorship</p>
            </Link>

            <Link className="nav-link me-4" to="/Ioperson">
              <IoPerson style={{ color: 'white', fontSize: '35px' }} />
              <p style={{ color: 'white' }}>Login/Signup</p>
            </Link>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{ backgroundColor: 'rgb(51, 153, 255)' }}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><strong>Menu</strong></h5><hr />
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/Postajob">For Employers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/jobs">Careers</Link>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <a className="nav-item dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                      Our Solutions
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Hiring</a></li>
                      <li><a className="dropdown-item" href="#">Assessments</a></li>
                      <li><a className="dropdown-item" href="#">Engagement</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <a className="nav-item dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                      Our Product
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Proctoring</a></li>
                      <li><a className="dropdown-item" href="#">Coding Interview Platform</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Clientele</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Job-Hunting Brand Ambassador Program</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Job-Hunting Talent Meet 2024</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/quizzesfestival">Online Quizzes Festival</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/onlinehackathons">Online Hackathon Festival</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Partner with Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/studyroom">Study Room</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">FAQs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Testimonials</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Termscondition">Terms & Conditions</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/PrivacyPolicy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navebar;
