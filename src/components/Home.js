import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column mb-3">
        <div className="d-flex flex-column align-items-center mb-3">
        <div className="p-2" style={{height:'10vh'}}></div>
        <div className="p-2" style={{backgroundColor:'green', height:'60vh', width: '100%'}}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <strong style={{color:'white', fontSize:'xxx-large', marginBottom:'1rem'}}> Over 15,600 Jobs Listed Here!</strong>
            <span style={{color:'white', marginBottom:'1rem'}}> <strong>IN Vyavasay JOB PORTAL EVERY MINUTE ABOUT 50 PEOPLES IS PLACED </strong></span>
            <span style={{color:'white', marginBottom:'1rem'}}> <strong>Ensuring a 95% Interview Scheduling Rate: Apply with Confidence on Our Job Portal! </strong></span>
            <form className="d-flex flex-column flex-sm-row" role="search">
              <input className="form-control mb-2 mb-sm-0 me-sm-2" type="search" placeholder="Place" aria-label="Search"/>
              <input className="form-control mb-2 mb-sm-0 me-sm-2" type="search" placeholder="Keyword:Name,Tag" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
        <div className="p-2">
        
       
        </div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
      </div>
    );
  }
}
