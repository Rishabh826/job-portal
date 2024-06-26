import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isSecondWord: false,
    };
    this.words = ['Knowledge', 'Strength'];
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
      <div className="container-fluid" style={{paddingTop:'2rem'}}>
 <div style={{backgroundImage:'url(https://i.pinimg.com/originals/c7/d3/2c/c7d32c03f4a3adbf6c26eb750ccfaacd.gif)', backgroundSize: 'cover', backgroundPosition: 'center',height:'90vh'}}>
        <div className="container">
          <div className="row justify-content-end">
          <div className="col-md-6 text-end" style={{marginTop:'10rem',color:'white'}}>
              <div className="subcon" >
                <h1 style={{fontSize:'4rem'}}><span style={{ color: 'black'}}>Unlock</span> {this.state.text}</h1>
                <p>From tech to non-tech, select from a wide range of courses to upskill and advance your career!</p>
              </div>
            </div>
          </div>
          <div className="row mt-3 justify-content-end" style={{ color: 'white',marginLeft:'30rem' }}>
            <div className="col-md-6" style={{maxWidth:'13rem',fontSize:'3rem'}}>
              <button type="button" className="btn btn-danger mb-2 me-2 d-block">Aptitude</button>
              <button type="button" className="btn btn-warning mb-2 me-2 d-block">Next Gen Skills</button>
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-dark mb-2 me-2 d-block">Coding </button>
              <button type="button" className="btn btn-info mb-2 me-2 d-block">Tools</button>
            </div>
          </div>
          <div className="row mt-2 justify-content-end" style={{ color: 'white',marginLeft:'3rem' ,marginTop:'2rem'}}>
            <div className="col-md-6" >
              <button type="button" className="btn btn-success mb-2 me-2 d-block">Interview Preparation</button>
            </div>
          </div>
        </div>
      </div>
        <div className="col">
          <div className="row-4">
            <div style={{marginTop:'8rem',marginLeft:"2rem"}}>
            <h1>Aptitude</h1>
            <p style={{marginTop:'2rem'}}>Give yourself the best preparation to clear pre-assessment rounds and competitive exams.</p>
            </div>
            <div class="d-flex justify-content-start" >
            <div class="card" style={{width: '18rem'}}>
  <img src="https://t4.ftcdn.net/jpg/06/60/37/87/360_F_660378717_cvD5CGXMu2ee8QszEEsFtBi3aOmKemzc.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Psychometric</h5>
    <p class="card-text">Psychometric Test assesses an individual's behavioral, emotional, and cognitiv...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:"2rem"}}>
  <img src="https://edit.org/img/blog/ljg-writing-contest-banner-templates-free.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Essay Writing</h5>
    <p class="card-text">A course is an educational program designed to impart specific knowledge and...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:"2rem"}}>
  <img src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/bb732cd8-3f56-4da0-8509-cb47f1a325ab_CI.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Verbal Reasoning</h5>
    <p class="card-text">Elevate your advanced verbal reasoning skills, vital for success in academics, profession...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card"style={{width: '18rem',marginLeft:"2rem"}}>
  <img src="https://mtgpublicwp.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/05/29144649/9789360239824_reasoning_cl8_2024-375x425.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Visual Reasoning course</h5>
    <p class="card-text">Visual Reasoning is a cognitive skill centered around comprehending and solving problems ....</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
            </div>

          </div>
          <div className="row-4">
            <div style={{marginTop:'8rem',marginLeft:'2rem'}}> <h1>Next Gen skills</h1>
            <p style={{marginTop:'2rem'}}>Start or switch your career by upskilling with job-ready skills.</p></div>
            <div class="d-flex justify-content-start">
            <div class="card" style={{width: '18rem'}}>
  <img src="https://img.freepik.com/premium-vector/artificial-intelligence-machine-learning-poster_35632-60.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">AI/ML</h5>
    <p class="card-text">This comprehensive Machine Learning course delves into Python basics and...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://static.vecteezy.com/system/resources/previews/012/066/310/original/cyber-security-awareness-poster-free-vector.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cyber Security</h5>
    <p class="card-text">A cybersecurity course equips students with essential skills to protect digital systems and data...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card"  style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://www.shutterstock.com/shutterstock/photos/652116691/display_1500/stock-vector-big-data-analysis-flat-concept-poster-design-vector-illustration-set-of-business-analytics-652116691.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Data Analyst</h5>
    <p class="card-text">In this Data Analytics course, you'll embark on a comprehensive journey into the world of data analysis. You'll delve into fundamental  concepts and tools, including ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card"  style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://www.shutterstock.com/image-vector/vintage-style-cloud-computing-poster-260nw-126108893.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Cloud Computing</h5>
    <p class="card-text">The Intermediate coding course is perfect for you if you aim to strengthen your proficiency in...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
            </div>
           
          </div>
          <div className="row-4">
          <div style={{marginTop:'8rem',marginLeft:'2rem'}}> <h1>Coding</h1>
            <p style={{marginTop:'2rem'}}>Learn fundamental and advanced concepts of high-demand programming languages with ease!</p></div>
            <div class="d-flex justify-content-start">
            <div class="card" style={{width: '18rem'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vWodITPElXa6q3Oc0UcleI9KfS8s7_p7Mz5DaFRaAH7rmT2PW6KDPeazCAl45BZk3O8&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">C Programming</h5>
    <p class="card-text">This comprehensive C language course is designed for you, regardless of your experience level. Whether ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://i.pinimg.com/736x/be/01/87/be018778ddd503c9d180a35eeacc1c02.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic Coding In Java</h5>
    <p class="card-text">The Basic Coding in Java course is tailored to help you, as a beginner, grasp the essentials of programming. It will ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENxoZNVafdiKIjI1pM94kzJL48piaKc5JVFsyNlEjvQ&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Learn Cpp</h5>
    <p class="card-text">C++ course is designed to cater to both beginners and experienced coders, offering a comprehensive it...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://m.media-amazon.com/images/I/51bsiClgimL.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Python</h5>
    <p class="card-text">Basic Coding in Python course is designed to introduce beginners to programming by focusing ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
            </div>
          </div>
        </div>
        <div className="row-4">
        <div style={{marginTop:'8rem',marginLeft:'2rem'}}> <h1>Tools</h1>
            <p style={{marginTop:'2rem'}}>Empower your data journey with Data Visualisation Tools
</p></div>
            <div class="d-flex justify-content-start">
            <div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://img.myloview.com/posters/sql-mean-structured-query-language-data-acronyms-letters-and-icons-vector-illustration-700-258044351.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Learn SQL</h5>
    <p class="card-text">This SQL course is essential for computer science students and job seekers, as SQL knowledge is in high ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://resizing.flixster.com/oPLcy1b3xQvPizY9Vq-4RFXcsH0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJmYTRhNzJmLWY0OWQtNDUxYi05YTAyLTM3ZmIyNzRkNWQ1Ny5qcGc=" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Tableau</h5>
    <p class="card-text">In this Tableau course, you'll dive into an extensive exploration of the Tableau analytics platform. You'll gain the ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://i.etsystatic.com/40758396/r/il/edb9ac/5116696929/il_300x300.5116696929_dbvi.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Learn Git</h5>
    <p class="card-text">This comprehensive GIT course explores version control through the Global Information Tracker, an essential  ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://content.packt.com/B17766/cover_image.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Power BI & Business Intelligence</h5>
    <p class="card-text">Power BI and Business Intelligence course empowers you with the skills to leverage data effectively. Learn to  ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
            </div>
        </div>

        <div className="row-4">
        <div style={{marginTop:'8rem',marginLeft:'2rem'}}> <h1>Interview Preparation</h1>
            <p style={{marginTop:'2rem'}}>Secure your dream role with confidence, thoughtful answers, and our interview prep resources.
</p></div>
            <div class="d-flex justify-content-start">
            <div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://www.shutterstock.com/image-vector/group-clerks-sitting-table-talking-260nw-1949275906.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Group Discussion</h5>
    <p class="card-text">In this Group Discussion course, you'll enhance your communication and collaboration skills in group settings. Through interactive  ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://www.hrmanagementapp.com/wp-content/uploads/2020/05/hr-skills-of-future.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">HR Preparations</h5>
    <p class="card-text">Explore our HR Preparations course, tailored to equip you for a thriving career in human resources. With a focus on recruitmen ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://img.freepik.com/free-psd/job-resume-flyer-template_23-2149111765.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Resume Building</h5>
    <p class="card-text">The Resume Building course is a comprehensive program designed to equip individuals with the skills and knowledge needed  ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTwhf6rYBqydQ7bx1xnP3w3qMHxh--g3R4H55HPfnBg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Interview Experience Product Based</h5>
    <p class="card-text">Enroll in our "Interview Experience Product Based" course to enhance your skills and ace interviews at top product-based ...</p>
    <a href="/" class="btn btn-primary">View Course</a>
  </div>
</div>
            </div>
        </div>
        <div className="row-4" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkK13Svk746bCweGUxGyxYr6M_ct5tdESN962DBOwe_g&s)',borderRadius:'100px',marginTop:'6rem',padding:'1.5rem'}}>
  <Link  to="/Practice" className="btn" style={{ borderRadius: '100px', display: 'block', padding: '0', background: 'none', border: 'none' }}>
    <div className="subcontainer" style={{marginLeft:'10rem',wordSpacing:'10px'}}>
      <h1><strong>Let's <span  style={{color:'green'}}>Practice</span>  What You've Learned</strong></h1>
      <p>Master your concepts with level-wise tests, followed by full-length mock exams!</p>
    </div>
  </Link>
</div>

<div className="footer mt-5" style={{ background: 'linear-gradient(30deg,rgb(13,153,181),rgb(8,210,250))',color:'white',borderRadius:'10px',padding:'10px'}}>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: info@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="col-md-4">
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
        <ul className="list-inline" style={{color:'black'}}>
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
    );
  }
}
