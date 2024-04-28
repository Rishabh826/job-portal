import React, { Component } from 'react'

export default class Practice extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div style={{backgroundImage:'url(https://c0.wallpaperflare.com/preview/685/967/619/healthy-lifestyle-meditating-nature.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',height:'90vh'}}>
        <div className="container">
          <div className="row justify-content-end">
          <div className="col-md-6 text-end" style={{marginTop:'10rem',color:'white'}}>
              <div className="subcon" >
                <h1 style={{fontSize:'4rem'}}><span style={{ color: 'black'}}>Unlock</span> Perfection</h1>
                <p style={{color:'rgb(0,0,102)'}}>Solve easy to complex problems & get hands-on experience to get hired by <span style ={{color:'black'}}> your dream company!</span> </p>
              </div>
            </div>
          </div>
          <div className="row mt-3 justify-content-end" style={{ color: 'white',marginLeft:'30rem' }}>
            <div className="col-md-6" style={{maxWidth:'13rem',fontSize:'3rem'}}>
              <button type="button" className="btn btn-danger mb-2 me-2 d-block">Coding Practice</button>
              <button type="button" className="btn btn-warning mb-2 me-2 d-block"  style={{marginTop:'1.5rem'}}>Company Preparation</button>
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-dark mb-2 me-2 d-block">Projects </button>
              <button type="button" className="btn btn-info mb-2 me-2 d-block" style={{marginTop:'1.9rem'}}>Skill Assessment</button>
            </div>
          </div>
          
        </div>
      </div>
      <div className="row" style={{marginTop:'5rem'}}>
  <div className="col">
    <div class="card text-bg-dark" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_3aLPjkumTXRE5xBD3xQCXEO4JQDcfpe7U9jUB4wWA&s" class="card-img" alt="..."/>
      <div class="card-img-overlay">
        <h5 class="card-title" style={{fontSize:'30px'}}>100 Days  Coding Sprint</h5>
        <p class="card-text" style={{marginTop:'1rem'}}>Level Up your skills daily with our 100-days coding sprint.</p>
        <button type="button" class="btn btn-primary" style={{marginTop:'6rem', borderRadius:'100px'}}>Start Now </button>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card text-bg-dark" style={{  }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9bVT6IneKiVMaQQaOWUc3UokZgubxjQtf7QwgxJCRqUUU_N1ixbf6i8I-ywfD5HASHg&usqp=CAU" class="card-img" alt="..."/>
      <div class="card-img-overlay">
        <h5 class="card-title"  style={{fontSize:'30px'}}>Code Conquest</h5>
        <p class="card-text" style={{marginTop:'1rem',width:'20rem'}}>Pick your topics, set your difficulty,
and master key concepts
with ease!.</p>
<button type="button" class="btn btn-primary" style={{marginTop:'5rem', borderRadius:'100px'}}>Start Now </button>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{marginTop:'5rem'}}>
  <h1>Projects</h1>
  <p>Our step-by-step guides and detailed explanations have your back. Your “project” just <span style={{color:'rgb(0,128,255)'}}> got a stress-free upgrade!</span></p>
  <div className="row">
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/3393/banners/652123c55227f_american-express.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">American Express Data Analysis</h5>
        <p class="card-text">The American Express Data Analysis course offers a comprehensive exploration of data analytics techniques and...</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596007407/blog/fomfdo6oem1wbfoej8ir.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Netflix Movie Suggestions</h5>
        <p class="card-text">Explore the "Netflix Movie Suggestions" course, where you'll uncover the intricacies of recommendation algorithms Discover the core principles of machine learning ...</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDCsgsQldH4KO8tCOR7CD9Fn1XMTBITOg4VzYgi-jsQ&s" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Amazon User Segmentation</h5>
        <p class="card-text">In this "Amazon User Segmentation" course, you'll gain expertise in categorizing and targeting Amazon customers. Explore cutting-edge...</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAucaA8lh41oNvFpsbgMoXVh1SB3BmkJM9qlbgT7KA4g&s" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Zomato Review Analysis</h5>
        <p class="card-text">"Zomato Review Analysis" course helps you to gain essential skills for analyzing Zomato user reviews. This comprehensive programt covers topics like natural language processing, sentiment analysis, and ,...</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
</div>

  </div>
  <div className="row" style={{marginTop:'5rem'}}>
    <h1>Company Preparation</h1>
    <p>Ace your dream job interview with expert guidance & success stories.</p>
    <div className="row">
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://media.licdn.com/dms/image/D5612AQFII0GImmbIww/article-cover_image-shrink_720_1280/0/1707994425044?e=2147483647&v=beta&t=70x3h1o2yhTOBCLcbSydm6R_RaOipDBtUEPW5QHvEbU" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Amazon Interview Preparation</h5>
        <p class="card-text">Our "Amazon Interview Preparation" is your key to success in landing a job at one ...</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://s3service.hitbullseye.com/s3fs-public/Zensar-signature.jpg?null" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Zensar Interview Preparation</h5>
        <p class="card-text">Our Zensar Interview Preparation course is your key to success in landing a job at one of the world's tech giants. With expertly crafted content, tailored  ...</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://www.softwaretestingo.com/wp-content/uploads/2019/11/Microsoft-Interview-Questions.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Microsoft Interview Preparation</h5>
        <p class="card-text">Microsoft is a global technology leader with billions of users and a diverse product portfolio. Working at Microsoft is rewarding but ...</p>
        <a href="#" class="btn btn-primary">Explore</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://i.insider.com/62f52e5a5b790400198b0366?width=700" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">IBM Interview Preparation</h5>
        <p class="card-text">"IBM is a leading global technology and consulting company with millions of clients and businesses. Working at IBM is rewarding but...</p>
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
