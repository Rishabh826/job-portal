import React, { Component } from 'react'

export default class Compete extends Component {
  render() {
    return (
        <div className="container-fluid">
         <div style={{backgroundImage:'url(https://c4.wallpaperflare.com/wallpaper/441/80/973/business-compete-competition-competitive-wallpaper-preview.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',height:'90vh'}}>
        <div className="container" style={{paddingTop:'5rem'}}>
          <div className="row justify-content-start">
          <div className="col-md-6 text-start" style={{marginTop:'10rem',color:'white'}}>
              <div className="subcon" >
                <h1 style={{fontSize:'3.5rem',color:'black'}}>Unlock  Opportunities</h1>
                <p style={{color:'black'}}>Make the most of every opportunity to learn and level up your skills. </p>
              </div>
            </div>
          </div>
          <div className="row mt-3 justify-content-start" style={{ color: 'white'}}>
            <div className="col-md-6" style={{maxWidth:'13rem',fontSize:'3rem'}}>
              <button type="button" className="btn btn-danger mb-2 me-2 d-block" style={{borderRadius:'100px'}}>Find Competitions</button>
             
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-info mb-2 me-2 d-block" style={{borderRadius:'100px'}}>Host Opportunity </button> 
            </div>
          </div>
          
        </div>
      </div>
      <div className="row" style={{marginTop:'5rem',marginLeft:'3rem'}}>
        <h1>  <span style={{color:'rgb(0,102,204)'}}>Popular</span> Opportunities</h1>
        <p>Explore the opportunities that are creating a buzz among your peers!
</p>
<div className="row">
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://www.lawctopus.com/wp-content/uploads/2024/04/India-Fellow-Social-Leadership-Program-2024.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Online    |    Free</h5>
        <p class="card-text">India Fellow Social Leadership Program 2024-25</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://d8it4huxumps7.cloudfront.net/bites/wp-content/banners/2023/11/654de62f17407_atlassian_interview_qna.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Online   |  Free</h5>
        <p class="card-text">Atlassian - Prepare for the interview!</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240219175616/juspay-copy.webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Online    |   Paid</h5>
        <p class="card-text">Juspay - Prepare for the interview!</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://files.codingninjas.in/article_images/infosys-preparation-guide-4-1660900089.webp" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Online    |  Paid</h5>
        <p class="card-text">Infosys- Prepare for the interview!</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className="footer mt-5" style={{ background: 'linear-gradient(30deg,rgb(13,153,181),rgb(8,210,250))',color:'white',borderRadius:'10px',padding:'10px'}}>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: info@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="col-md-4" style={{textDecoration:'none'}}>
        <h5>Quick Links</h5>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Courses</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Social Media</h5>
        <ul className="list-inline" style={{color:'white'}}>
          <li className="list-inline-item"><a href="/"><i className="fab fa-facebook"></i></a></li>
          <li className="list-inline-item"><a href="/"><i className="fab fa-twitter"></i></a></li>
          <li className="list-inline-item"><a href="/"><i className="fab fa-instagram"></i></a></li>
          <li className="list-inline-item"><a href="/"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-12 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}
