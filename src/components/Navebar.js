import React, { Component } from 'react'
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default class home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark  fixed-top" style={{backgroundColor:'green'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{fontSize:'30px'}}><strong>Vyavasay.com</strong></Link>
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
<div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{backgroundImage:'url(https://www.pixelstalk.net/wp-content/uploads/2016/08/Download-Full-HD-Wallpapers-1080p.jpg)'}}>
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><strong>Menu</strong></h5>
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Jobs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ContactUs">Contact Us</Link>
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
