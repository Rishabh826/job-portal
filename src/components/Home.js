import React, { Component } from 'react';

import { FaAws } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { PiFileSqlBold } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { Link } from 'react-router-dom';
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
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isSecondWord: false,
    };
    this.words = ['Over 1,500 Jobs Listed Here!', 'We Are Leading From Front'];
    this.index = 0;
    this.wordIndex = 0;
    this.delta = 250; // Delay between each character
  }

  componentDidMount() {
    this.interval = setInterval(this.updateText.bind(this), this.delta);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateText() {
    const word = this.words[this.wordIndex];
    let newText = '';

    if (this.index < word.length) {
      newText = word.slice(0, this.index + 1);
      this.index++;
    } else {
      if (this.state.isSecondWord) {
        this.index = 0;
        this.wordIndex = 0; // Reset to start of the words array
        this.setState({ isSecondWord: false });
      } else {
        this.index = 0;
        this.wordIndex = 1; // Switch to the second word
        this.setState({ isSecondWord: true });
      }
      return;
    }

    this.setState({ text: newText });
  }

  render() {
    return (
      <div className="d-flex flex-column mb-3">
        <div className="d-flex flex-column align-items-center mb-3">
        <div className="p-2" style={{height:'10vh'}}></div>
        <div className="p-2" style={{background:'linear-gradient(-30deg,rgb(13,153,181),rgb(8,210,250))', height:'60vh', width: '100%'}}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <strong style={{color:'white', fontSize:'xxx-large', marginBottom:'1rem'}}>{this.state.text}</strong>
            <span style={{color:'white', marginBottom:'1rem'}}> <strong>IN JobHunting JOB PORTAL EVERY MINUTE ABOUT 50 PEOPLES IS PLACED </strong></span>
            <marquee  scrollamount="10" direction="right" behavior="scroll" style={{color:'white', marginBottom:'1rem'}}> <strong>Ensuring a 95% Interview Scheduling Rate: Apply with Confidence on Our Job Portal!  <FaEllipsisH /> <FaCarSide /> </strong></marquee>
          
          </div>
        </div>
      </div>


      <div className="container p-2" style={{backgroundImage:'url(https://wallpapers.com/images/featured/cool-white-background-ingbh7qw7if21dkn.jpg)'}}>
        <div className="d-flex justify-content-center" style={{ textShadow: '4px 3px 3px black' }}>
          <h1><strong><span style={{ color: 'blue' }}>Unlock</span> Your Career</strong></h1>
        </div>
        <marquee className="d-flex justify-content-center" style={{ color: 'rgb(117, 109, 111)', marginBottom: '20px', animation: 'wave 2s infinite' }}>
        <FaCarSide /> <FaEllipsisH /> Explore opportunities from across the globe to learn, showcase skills, gain CV points & get hired by your dream company.
        </marquee>
        <div className="row justify-content-around mt-4">
          <div className="col-md-4">
            <Link  className="link to Learn" to="/Learn">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://i.pinimg.com/originals/61/87/e9/6187e9226969b30607c22591376850b7.jpg" className="card-img"  alt="..." />
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
            </Link>
          </div>
          <div className="col-md-4">
          <Link  className="link to Jobs" to="/Learn">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://cdn.siasat.com/wp-content/uploads/2021/10/photo_2021-10-27_20-29-34.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Jobs</h5>
                <p className="card-text"><strong>Explore</strong><br />Diverse career</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
          <Link  className="link to Practice" to="/Practice">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://c0.wallpaperflare.com/preview/498/976/47/success-stairs-board-drawing.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Practice</h5>
                <p className="card-text"><strong>Refine</strong><br />Skill Daily</p>
              </div>
            </div>
            </Link>
          </div>
          
        </div>
        <div className="row justify-content-around mt-4">
      
          <div className="col-md-6">
          <Link  className="link to Mentorship" to="/Mentorship">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://c0.wallpaperflare.com/preview/805/197/218/hikers-mentor-help-climbing.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">mentorship</h5>
                <p className="card-text"><strong>Guidance</strong><br />From Top Mentor</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-6">
          <Link  className="link to compete" to="/Compete">
            <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
              <img src="https://c1.wallpaperflare.com/preview/612/780/946/shaking-hands-handshake-teamwork-staff.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Compete</h5>
                <p className="card-text"><strong>Battle</strong><br />For Excellence</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
        
      </div>

        
      <div className="p-2" style={{marginTop:'10rem'}}>
      <marquee scrollamount='10'  direction="right" className="d-flex justify-content-center" style={{fontFamily:'fantasy'}}><h1>     Running Programm in colleges<FaEllipsisH /> <FaCarSide /> </h1></marquee> <hr />
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
        <a to="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card m-2" style={{ width: '18rem', display: 'inline-block' }}>
      <img src="https://c0.wallpaperflare.com/preview/390/581/130/african-african-american-bangkok-black.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online  |  Free</h5>
        <p className="card-text"><strong> How to Crack the Test of Tech Giants!</strong></p>
        <a to="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card m-2" style={{ width: '18rem', display: 'inline-block' }}>
      <img src="https://e1.pxfuel.com/desktop-wallpaper/554/694/desktop-wallpaper-job-fair.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online   |  Free</h5>
        <p className="card-text"><strong>Win Attractive Cash Prizes with SUSTAIN-A-THON....</strong></p>
        <a to="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
    <div className="card m-2" style={{ width: '18rem', display: 'inline-block' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLStw6FXmt93n804Pa6sf5GXd3C0bPqH9iXw4RIYhSfXt6WY8uevR4tAL96DBdict5E8&usqp=CAU" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online   | Free</h5>
        <p className="card-text"><strong>Flipkart Girls Wanna Code 5.0 | Grab PPIs and.....</strong></p>
        <a to="#" className="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
</div>



        <div className="p-2">
        <div className="d-flex justify-content-center">
        <div className="card mb-3" style={{maxWidth:'90rem'}}>
  <div className="row g-0">
    <div className="col-md-4" >
      <img src="https://media.istockphoto.com/id/1137026449/photo/happy-smiling-boy-pointing-at-laptop-computer.jpg?s=612x612&w=0&k=20&c=RDa77zkUr4obh618p_wDCjCyAgV89EQxiRCyAqiMIgc=" className="img-fluid rounded-start" alt="..."/>
      
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'5em'}}><strong style={{color:'blue'}}>Learn &</strong><p>
          <strong>Level up your Skills</strong></p> </h5>
        <p className="card-text"></p>
        <p className="card-text">Select from a wide range of courses to upskill and advance your career!</p>
        <p>50+ Courses   |   Certificate    |    Projects & Assignment </p>
        <Link to="/Learn" className="btn btn-primary" style={{borderRadius:'50px',fontSize:'2rem'}}>Explore Courses <FaArrowPointer /></Link>
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
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.pinimg.com/originals/40/bf/50/40bf5022f099e7030c11e17e50f4b3da.png" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div className="carousel-caption d-none d-md-block" style={{marginBottom:'0.4rem'}}>
        <h1 style={{marginBottom:'12rem'}} >Coding Practice <SiCodingninjas />  </h1>
        <p >Level up your coding skills by practicing the hiring Questions</p>
        <span><strong>400+ Questions</strong></span>
        <span><a to="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
      </div>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div className="carousel-caption d-none d-md-block" style={{marginBottom:'0.4rem' ,color:'black'}}>
        <h1 style={{marginBottom:'12rem'}} >Interview  preparations <FaBookMedical /> </h1>
        <p><strong>Crack Top companies in just 5 days.</strong></p>
        <span><strong>30+ companies</strong></span>
        <span><a to="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
      </div>
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/realistic-white-monochrome-background_23-2149010357.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div className="carousel-caption d-none d-md-block" style={{marginBottom:'0.4rem' ,color:'black'}}>
        <h1 style={{marginBottom:'12rem'}} >Projects <GoProjectSymlink />  </h1>
        <p><strong>Projects epitomize perfect synergy for success.</strong></p>
        <span><strong>200+ projects</strong></span>
        <span><a to="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
      </div>
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1254880085/vector/survey-and-testimonials-related-vector-illustration-flat-modern-design.jpg?s=612x612&w=0&k=20&c=-4_NbcfWS13l7CKtih9RAW8d-VWPO_fW34wRJ7nyoKY=" className="d-block w-100" alt="..." style={{ width: '100%', height: '400px' }} />
          <div className="carousel-caption d-none d-md-block" style={{marginBottom:'1.5rem' ,color:'black'}}>
        <h1 style={{marginBottom:'12rem'}} >Skill assessment <GiSkills />  </h1>
        <p><strong>Assess your skills and get ahead of the curve.</strong></p>
        <span><strong>5000+ Questions</strong></span>
        <span><a to="#" className="btn btn-primary" style={{borderRadius:'50px',marginLeft:'1.2rem'}}>Explore Courses <FaArrowPointer /></a></span>
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
      <span><a to="#" className="btn btn-primary" style={{ borderRadius: '50px' }}>Find a Mentor <FaSearch /></a></span>
      <span><a to="#" className="btn btn-primary" style={{ borderRadius: '50px' }}>Become a mentor</a></span>
    </div>
    <img src="https://media.licdn.com/dms/image/D4E12AQHuUhy0-uoL0A/article-cover_image-shrink_720_1280/0/1690541851995?e=2147483647&v=beta&t=_NTXP41mHEMR4qjwI_PMQZ3KZ7M85h2_-JY2WkRfvKQ" alt="" style={{ width: '100%', height:'500px', marginTop: '1.5rem' }} />
  </div>
</div>

        


<div className="container p-2">
  <div className="row">
    <div className="col-md-6">
      <div className="p-3" style={{ backgroundImage:'url(https://wallpapers.com/images/featured/cool-white-background-ingbh7qw7if21dkn.jpg)' ,marginTop:'4rem'}}>
        <h1><span style={{ color: 'rgb(9,6,98)' }}>Browse Job / Internship</span> That’s Right For You!</h1>
        <p>Find a role that fits your career aspirations.</p>
        <div className="d-flex flex-wrap">
          <span><a to="#" className="btn btn-primary m-1" style={{ borderRadius: '50px' }}>Find Jobs <FaSearch /></a></span>
          <span><a to="#" className="btn btn-primary m-1" style={{ borderRadius: '50px' }}> <GiSandsOfTime />Full-Time </a></span>
          <span><a to="#" className="btn btn-primary m-1" style={{ borderRadius: '50px' }}> <GiSandsOfTime />Part-Time</a></span>
          <span><a to="#" className="btn btn-primary m-1" style={{ borderRadius: '50px' }}><IoIosBed />Work from Home</a></span>
          <span><a to="#" className="btn btn-primary m-1" style={{ borderRadius: '50px' }}><MdOutlineMapsHomeWork />On-Field</a></span>
        </div>
      </div>
    </div>
    
    <div className="col-md-6">
  <div className="p-3">
    <div className="row">
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-body" style={{backgroundImage:'url(https://wallpapers.com/images/featured/cool-white-background-ingbh7qw7if21dkn.jpg)'}}>
            <h5 className="card-title">Jobs  <SiMongodb /> <FaReact />  <PiFileSqlBold /> <IoLogoHtml5 /></h5>
            <hr />
            <a to="#" className="btn btn-success" style={{ border: '2px black',borderRadius:'100px' }}>
              <strong>web developer</strong>
              <p>software development</p>
            </a>
            <a to="#" className="btn btn-success" style={{ border: '2px black' ,marginTop:'10px',borderRadius:'100px',width:'11rem'}}>
              <strong>Data Science</strong>
              <p>computer science</p>
            </a>
            <a to="#" className="btn btn-success" style={{ border: '2px black',marginTop:'10px',borderRadius:'100px',width:'11rem' }}>
              <strong>Digital Marketing</strong>
              <p>Marketing</p>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-body" style={{backgroundImage:'url(https://wallpapers.com/images/featured/cool-white-background-ingbh7qw7if21dkn.jpg)'}}>
            <h5 className="card-title">Internships  <FaGoogle /> <FaFacebookSquare /> <FaXTwitter /></h5>
            <hr />
            <a to="#" className="btn btn-success" style={{ border: '2px black',borderRadius:'100px' }}>
              <strong>web developer</strong>
              <p>software development</p>
            </a>
            <a to="#" className="btn btn-success" style={{ border: '2px black',borderRadius:'100px',marginTop:'10px',borderRadius:'100px',width:'11rem' }}>
              <strong>Content Writing</strong>
              <p>Content</p>
            </a>
            <a to="#" className="btn btn-success" style={{ border: '2px black',borderRadius:'100px',borderRadius:'100px',width:'11rem',marginTop:'10px' }}>
              <strong>UI/UX Designer</strong>
              <p>Designer</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</div>





<div className="p-2">
      <div className="subcontainer" style={{marginLeft:'5rem'}}>
        <div className="header" style={{marginLeft:'2rem'}}>
          <h1>Pick <span style={{ color: 'rgb(0,128,255)' }}> The Right Opportunity!</span></h1>
          <p style={{ color: 'rgb(160,160,160)' }}>  Explore opportunities that best suits your skills and interests!</p>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <marquee className="carousel-inner" scrollamount="15">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-2">
                  <div className="card" style={{ width: '13rem' ,marginLeft:'2rem',backgroundImage:'url(https://wallpapers-hub.art/wallpaper-images/398133.jpg)',height:'15rem'}}>
                    <div className="card-body">
                      <h3 className="card-title">Hackathon</h3>
                      <span><a to="/onlinehackathons" className="btn btn-primary" style={{ borderRadius: '100px',marginTop:'7rem' }}>Enroll now</a></span>
                    
                    </div>
                  </div>
                </div>
                
                <div className="col-md-2">
                  <div className="card"  style={{ width: '13rem' ,marginLeft:'2rem',backgroundImage:'url(https://c1.wallpaperflare.com/preview/653/576/854/question-mark-pile-question-mark.jpg)',height:'15rem'}}>
                    <div className="card-body">
                      <h3 className="card-title" style={{color:'white'}}>Quizzes</h3>
                      <span><a to="#" className="btn btn-primary" style={{ borderRadius: '100px',marginTop:'7rem' }}>Enroll now</a></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card"  style={{ width: '13rem' ,marginLeft:'2rem',backgroundImage:'url(https://img.freepik.com/premium-vector/graduation-cost-expensive-education-scholarship-loan-budget_101884-1023.jpg)',height:'15rem'}}>
                    <div className="card-body">
                      <h3 className="card-title">Scholarship</h3>
                      <span><a to="#" className="btn btn-primary" style={{ borderRadius: '100px',marginTop:'7rem' }}>Enroll now</a></span>
                  
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card"  style={{ width: '13rem' ,marginLeft:'2rem',backgroundImage:'url(https://www.shutterstock.com/image-photo/speaker-business-conference-presentation-audience-600nw-217119211.jpg)',height:'15rem'}}>
                    <div className="card-body">
                      <h3 className="card-title" style={{color:'white'}}>Conferences</h3>
                      <span><a to="#" className="btn btn-primary" style={{ borderRadius: '100px',marginTop:'7rem' }}>Enroll now</a></span>
                  
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card"  style={{ width: '13rem' ,marginLeft:'2rem',backgroundImage:'url(https://img.freepik.com/free-photo/first-place-medal_23-2148930694.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712448000&semt=ais)',height:'15rem'}}>
                    <div className="card-body">
                      <h3 className="card-title">Competitions</h3>
                      <span><a to="#" className="btn btn-primary" style={{ borderRadius: '100px',marginTop:'7rem' }}>Enroll now</a></span>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </marquee>
        </div>  
      </div>
    </div> 

          
           <div className="p-2" style={{backgroundImage:'url(https://img.freepik.com/premium-photo/abstract-background-images-wallpaper-ai-generated_643360-7601.jpg)',marginTop:'3rem'}}>
           <div className="d-flex justify-content-center"><h1>
            <strong>Host Your Own <span  style={{ color: 'rgb(0,128,255)' }}>Opportunity</span></strong></h1>
         
           </div>
           <div className="d-flex justify-content-center">

           Engage with a diverse talent pool or hire the best minds froms <span style={{ color: 'blue' }}>100M+ users.</span>
           </div>
           <div className="d-flex justify-content-center">
           <span><Link to="/Postajob"  className="btn btn-primary" style={{ borderRadius: '100px',marginTop:'5rem' ,fontSize:'2.5rem',fontFamily:'fantasy'}}>Host Now <FaLocationArrow /></Link></span>
           <a to="#" className="card-link">Know More +</a>
           </div>
           </div>
           <div className="p-2" style={{marginTop:'3rem',background:'linear-gradient(-30deg,rgb(13,153,181),rgb(8,210,250))'}}>
           <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Job Hunter</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam mauris vitae nulla suscipit, nec cursus nunc rhoncus.</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a to="#home">Home</a></li>
              <li><a to="#about">About</a></li>
              <li><a to="#services">Services</a></li>
              <li><a to="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              <strong>Job Hunter</strong><br />
              123 Street Name, City<br />
              Country, Postal Code<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Job Hunter. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
           </div>
           

      </div>
    );
  }
}
