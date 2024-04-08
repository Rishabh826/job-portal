import React, { Component } from 'react';
import { FaAws } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { PiFileSqlBold } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaArrowPointer } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";
import { FaBookMedical } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { MdOutlineMapsHomeWork } from "react-icons/md";
export default class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column mb-3">
        <div className="d-flex flex-column align-items-center mb-3">
        <div className="p-2" style={{height:'10vh'}}></div>
        <div className="p-2" style={{background:'linear-gradient(-30deg,rgb(13,153,181),rgb(8,210,250))', height:'60vh', width: '100%'}}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <strong style={{color:'white', fontSize:'xxx-large', marginBottom:'1rem'}}> Over 15,600 Jobs Listed Here!</strong>
            <span style={{color:'white', marginBottom:'1rem'}}> <strong>IN JobHunting JOB PORTAL EVERY MINUTE ABOUT 50 PEOPLES IS PLACED </strong></span>
            <span style={{color:'white', marginBottom:'1rem'}}> <strong>Ensuring a 95% Interview Scheduling Rate: Apply with Confidence on Our Job Portal! </strong></span>
          
          </div>
        </div>
      </div>


      <div className="container p-2">
        <div className="d-flex justify-content-center" style={{ textShadow: '4px 3px 3px black' }}>
          <h1><strong><span style={{ color: 'blue' }}>Unlock</span> Your Career</strong></h1>
        </div>
        <div className="d-flex justify-content-center" style={{ color: 'rgb(117, 109, 111)', marginBottom: '20px', animation: 'wave 2s infinite' }}>
          Explore opportunities from across the globe to learn, showcase skills, gain CV points & get hired by your dream company.
        </div>
        <div className="row justify-content-around mt-4">
          <div className="col-md-4">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://i.pinimg.com/originals/61/87/e9/6187e9226969b30607c22591376850b7.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Learn</h5>
                <hr style={{ backgroundColor: 'blue', height: '2px', margin: '8px 0' }} />
                <p className="card-text"><strong>Expand</strong>
                <span style={{fontSize:'3rem',marginLeft:'4rem'}}><SiMongodb /></span><br />Knowledge Base</p>
                <span style={{fontSize:'3rem'}}><FaAws /></span>
                <span style={{fontSize:'3rem',marginLeft:'8px'}}><FaReact /></span>
                <span style={{fontSize:'3rem',marginLeft:'8px'}}><PiFileSqlBold /></span>
                <span style={{fontSize:'3rem',marginLeft:'8px'}}><FaPython /></span>
                <span style={{fontSize:'3rem',marginLeft:'8px'}}><IoLogoHtml5 /></span>
             
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://cdn.siasat.com/wp-content/uploads/2021/10/photo_2021-10-27_20-29-34.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Jobs</h5>
                <p className="card-text"><strong>Explore</strong><br />Diverse career</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://c0.wallpaperflare.com/preview/498/976/47/success-stairs-board-drawing.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Practice</h5>
                <p className="card-text"><strong>Refine</strong><br />Skill Daily</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-around mt-4">
          <div className="col-md-6">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://c0.wallpaperflare.com/preview/805/197/218/hikers-mentor-help-climbing.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">mentorship</h5>
                <p className="card-text"><strong>Guidance</strong><br />From Top Mentor</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://c1.wallpaperflare.com/preview/612/780/946/shaking-hands-handshake-teamwork-staff.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Compete</h5>
                <p className="card-text"><strong>Battle</strong><br />For Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        
      <div className="p-2" style={{marginTop:'10rem'}}>
      <div class="d-flex justify-content-center" style={{fontFamily:'fantasy'}}><h1>Running Programm in colleges</h1></div> <hr />
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{marginTop:'5rem'}}>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000" style={{ height: '30rem' }}>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coding-competition-design-template-87dba6fa6e8291b8fe5e29abc492288a_screen.jpg?ts=1676540509" className="d-block w-100" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
            </div>
            <div className="carousel-item" data-bs-interval="5000" style={{ height: '30rem' }}>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-robotics-competition-custom-flyer-design-template-08c2b92af6d2a3f628f31495d0a02fc2_screen.jpg?ts=1637021997" className="d-block w-100" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
            </div>
            <div className="carousel-item" data-bs-interval="5000" style={{ height: '30rem' }}>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-event-template-%28technical-event%29-design-326619bf99a3a2d6b980d7c3caa2bbcf_screen.jpg?ts=1591346589" className="d-block w-100" alt="..." style={{ objectFit: 'cover', height: '100%' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      <div className="p-2" style={{ backgroundColor: 'rgb(120,133,135)', color: 'white' }}>
  <h1>Featured opportunities</h1>
  <span><strong>Check out the curated opportunities handpicked for you from top organizations.</strong></span>

  <div className="row" style={{marginTop:'5rem',marginLeft:'2rem'}}>
    <div className="card m-2" style={{ width: '18rem', display: 'inline-block' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgidjfaQGZHB_aG2-kSjK-Wt3L3_zlePmJkI1Lh_FGNw&s" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online  |  Free</h5>
        <p className="card-text"> <strong>How to crack product management roles!</strong> </p>
        <a href="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card m-2" style={{ width: '18rem', display: 'inline-block' }}>
      <img src="https://c0.wallpaperflare.com/preview/390/581/130/african-african-american-bangkok-black.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online  |  Free</h5>
        <p className="card-text"><strong> How to Crack the Test of Tech Giants!</strong></p>
        <a href="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card m-2" style={{ width: '18rem', display: 'inline-block' }}>
      <img src="https://e1.pxfuel.com/desktop-wallpaper/554/694/desktop-wallpaper-job-fair.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online   |  Free</h5>
        <p className="card-text"><strong>Win Attractive Cash Prizes with SUSTAIN-A-THON....</strong></p>
        <a href="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card m-2" style={{ width: '18rem', display: 'inline-block' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLStw6FXmt93n804Pa6sf5GXd3C0bPqH9iXw4RIYhSfXt6WY8uevR4tAL96DBdict5E8&usqp=CAU" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online   | Free</h5>
        <p className="card-text"><strong>Flipkart Girls Wanna Code 5.0 | Grab PPIs and.....</strong></p>
        <a href="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
</div>



        <div className="p-2">
        <div class="d-flex justify-content-center">
        <div class="card mb-3" style={{maxWidth:'90rem'}}>
  <div class="row g-0">
    <div class="col-md-4" >
      <img src="https://media.istockphoto.com/id/1137026449/photo/happy-smiling-boy-pointing-at-laptop-computer.jpg?s=612x612&w=0&k=20&c=RDa77zkUr4obh618p_wDCjCyAgV89EQxiRCyAqiMIgc=" class="img-fluid rounded-start" alt="..."/>
      
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{fontSize:'5em'}}><strong style={{color:'blue'}}>Learn &</strong><p>
          <strong>Level up your Skills</strong></p> </h5>
        <p class="card-text"></p>
        <p class="card-text">Select from a wide range of courses to upskill and advance your career!</p>
        <p>50+ Courses   |   Certificate    |    Projects & Assignment </p>
        <a href="#" className="btn btn-primary" style={{borderRadius:'50px',fontSize:'2rem'}}>Explore Courses <FaArrowPointer /></a>
      </div>
    </div>
  </div>
</div>
        </div>

        </div>



        <div className="p-2" style={{marginTop:'4rem'}}>
  <div className="d-flex justify-content-start">
    <strong><h1 style={{ marginLeft: '5rem', marginTop: '2rem' }}>Practice Coding & Ace Hiring Assessments </h1></strong>
  </div>
  <div><p style={{ marginLeft: '5rem' }}>Level up your coding skills by practicing the hiring assessments of your dream companies & ace your placement game!</p></div>
  <div className="d-flex justify-content-center">
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.pinimg.com/originals/40/bf/50/40bf5022f099e7030c11e17e50f4b3da.png" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div class="carousel-caption d-none d-md-block" style={{marginBottom:'0.4rem'}}>
        <h1 style={{marginBottom:'12rem'}} >Coding Practice <SiCodingninjas />  </h1>
        <p >Level up your coding skills by practicing the hiring Questions</p>
        <span><strong>400+ Questions</strong></span>
        <span><a href="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
      </div>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div class="carousel-caption d-none d-md-block" style={{marginBottom:'0.4rem' ,color:'black'}}>
        <h1 style={{marginBottom:'12rem'}} >Interview  preparations <FaBookMedical /> </h1>
        <p><strong>Crack Top companies in just 5 days.</strong></p>
        <span><strong>30+ companies</strong></span>
        <span><a href="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
      </div>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/realistic-white-monochrome-background_23-2149010357.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div class="carousel-caption d-none d-md-block" style={{marginBottom:'0.4rem' ,color:'black'}}>
        <h1 style={{marginBottom:'12rem'}} >Projects <GoProjectSymlink />  </h1>
        <p><strong>Projects epitomize perfect synergy for success.</strong></p>
        <span><strong>200+ projects</strong></span>
        <span><a href="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
      </div>
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1254880085/vector/survey-and-testimonials-related-vector-illustration-flat-modern-design.jpg?s=612x612&w=0&k=20&c=-4_NbcfWS13l7CKtih9RAW8d-VWPO_fW34wRJ7nyoKY=" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div class="carousel-caption d-none d-md-block" style={{marginBottom:'1.5rem' ,color:'black'}}>
        <h1 style={{marginBottom:'12rem'}} >Skill assessment <GiSkills />  </h1>
        <p><strong>Assess your skills and get ahead of the curve.</strong></p>
        <span><strong>5000+ Questions</strong></span>
        <span><a href="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
      </div>
        </div>
      </div>
    </div>
  </div>
</div>




<div className="p-2">
  <div style={{ marginTop: '6rem', marginLeft: '3rem' }}>
    <h1><span style={{ color: 'rgb(9,6,98)' }}>Personalised </span> Mentor Support</h1>
    <p style={{ color: 'rgb(132,132,144)' }}>Select a mentor from a pool of 2000+ industry experts & get 1-on-1 mentorship!</p>
    <div className="d-flex justify-content-between" style={{ marginTop: '1.2rem' }}>
      <span><a href="#" className="btn btn-primary" style={{ borderRadius: '50px' }}>Find a Mentor <FaSearch /></a></span>
      <span><a href="#" className="btn btn-primary" style={{ borderRadius: '50px' }}>Become a mentor</a></span>
    </div>
    <img src="https://media.licdn.com/dms/image/D4E12AQHuUhy0-uoL0A/article-cover_image-shrink_720_1280/0/1690541851995?e=2147483647&v=beta&t=_NTXP41mHEMR4qjwI_PMQZ3KZ7M85h2_-JY2WkRfvKQ" alt="" style={{ width: '100%', height:'500px', marginTop: '1.5rem' }} />
  </div>
</div>

        


        <div className="p-2" style={{backgroundColor:'rgb(219,226,220)'}}>

        <div class="d-flex justify-content-start"><h1><span  style={{color:'rgb(9,6,98)'}}>
        Browse Job / Internship </span>That’s Right For You!</h1></div>
        <p>Find a role that fits your career aspirations.</p>
       <span><a href="#" className="btn btn-primary" style={{ borderRadius: '50px' }}>Find Jobs <FaSearch /></a></span>
       <span><a href="#" className="btn btn-primary" style={{ borderRadius: '50px' }}> <GiSandsOfTime />Full-Time </a></span> 
         <span><a href="#" className="btn btn-primary" style={{ borderRadius: '50px' }}> <GiSandsOfTime />Part-Time</a></span>
         <span><a href="#" className="btn btn-primary" style={{ borderRadius: '50px' }}><IoIosBed />Work from Home</a></span>
         <span><a href="#" className="btn btn-primary" style={{ borderRadius: '50px' }}><MdOutlineMapsHomeWork />On-Field</a></span>
         <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Jobs</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">interships</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>


        <div className="p-2"></div> <div className="p-2"></div>
      </div>
    );
  }
}
