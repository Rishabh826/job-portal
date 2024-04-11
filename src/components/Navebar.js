import React, { Component } from 'react'
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default class home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark  fixed-top" style={{background:'linear-gradient(30deg,rgb(13,153,181),rgb(8,210,250))'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontSize:'30px'}}><strong>JobHunting.com</strong></Link>
    <div className="d-flex justify-content-end flex-grow-1" >
<div style={{color:'white', fontSize:'35px', paddingRight:'40px'}} type="button">
<Link className="nav-link" to="/Ioperson">
<IoPerson />
              </Link>

</div>
    
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{backgroundImage:'url(https://img.freepik.com/premium-photo/4k-abstract-black-background_625460-704.jpg)'}}>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><strong>Menu</strong></h5>
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
    <li className="nav-item">
        <Link className="nav-link" to="#">For Employers</Link>
      </li>
      <li className="nav-item">
      <div class="dropdown">
  <a class="nav-item dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'whitesmoke', textDecoration: 'none'}}>
    our solutions
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Hiring</a></li>
    <li><a class="dropdown-item" href="#">Assesments</a></li>
    <li><a class="dropdown-item" href="#">Engagement</a></li>
  </ul>
</div>

<div class="dropdown">
  <a class="nav-item dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'whitesmoke',textDecoration:'none'}}>
    Our Product
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Proctoring</a></li>
    <li><a class="dropdown-item" href="#">Coding Interview Plateform</a></li>
    
  </ul>
</div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Job-Hunting Talent meet 2024</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Jobs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ContactUs">FaQ's</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">For Employs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Pricing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Terms & Conditions</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Privacy Policy</Link>
      </li>
    </ul>
  </div>
</div>

  </div>
</nav>
      </div>
    )
  }
}
