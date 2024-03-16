import React, { Component } from 'react'
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default class home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark  fixed-top" style={{backgroundImage:'url(https://t4.ftcdn.net/jpg/00/69/42/49/360_F_69424905_vxTpRGAcVKni9157VpKAOG6MpTX30etl.jpg)'}}>
  <div className="container-fluid">
    <a className="navbar-brand" to="/" style={{fontSize:'30px'}}><strong>Rishabh Job Portal</strong></a>
    <div className="d-flex justify-content-end flex-grow-1" >
<div style={{color:'white', fontSize:'35px', paddingRight:'40px'}} type="button">
<Link className="nav-link" to="/Ioperson">
<IoPerson />
              </Link>

</div>
    <form className="d-flex mt-2" role="search" style={{paddingRight:'20px'}} >
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
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
        <Link className="nav-link active" aria-current="page" to="#">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Jobs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Contact Us</Link>
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
