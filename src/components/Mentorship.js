import React, { Component } from 'react';

class Mentorship extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDomain: '',
      hiredMentors: [],
      mentors: [
        { id: 1, name: 'Rohan Das', domain: 'Web Development' , quality:'99.34 Percentile CAT 2021 | MDI Gurgaon PGDM 24 | Ex-TCS | Bhilai Institute of Technology' },
        { id: 2, name: 'Tanya sharma', domain: 'Data Science',quality:'Operations Manager - P&G | IIT Madras | Unstop B-School Leader 23 | National Winner - Infosys Ingenious 22 & 6 Bschool Competitions | Ex-Wipro' },
        { id: 3, name: 'Harsh patel', domain: 'Machine Learning' ,quality:'IIM Indore 25 | Ramjas College | Finance | Ace MBA Entrance Preparations'},
        { id: 4, name: 'Deepak Tyagi', domain: 'UI/UX Design' , quality:'IIM Indore 25 | Ramjas College | Finance | Ace MBA Entrance Preparations' },
        { id: 5, name: 'Jayan', domain: 'Digital Marketing' ,quality:'Operations Manager - P&G | IIT Madras | Unstop B-School Leader 23 | National Winner - Infosys Ingenious 22 & 6 Bschool Competitions | Ex-Wipro' },
        { id: 6, name: 'Sophia Lee', domain: 'Cloud Computing' ,quality:'Operations Manager - P&G | IIT Madras | Unstop B-School Leader 23 | National Winner - Infosys Ingenious 22 & 6 Bschool Competitions | Ex-Wipro' },
        // Add more mentors with different domains
        { id: 7, name: 'David Warner', domain: 'Web Development',quality:'Analyst at Citi gp | Tedx Speaker | Economic Times Campus Star 2022 Finalist | AWS Cloud Practitioner Essential certified' },
        { id: 8, name: 'Rohit yadav', domain: 'Machine Learning',quality:'Analyst at Citi gp | Tedx Speaker | Economic Times Campus Star 2022 Finalist | AWS Cloud Practitioner Essential certified' },
        { id: 9, name: 'Vipin sharma', domain: 'Digital Marketing' ,quality:'Analyst at Citi gp | Tedx Speaker | Economic Times Campus Star 2022 Finalist | AWS Cloud Practitioner Essential certified'}
      ]
    };
  }

  handleDomainSelect = (domain) => {
    this.setState({ selectedDomain: domain });
  };

  // Function to handle mentor hiring
  handleHireMentor = (mentorId) => {
    const { mentors, hiredMentors } = this.state;
    const mentorToHire = mentors.find(mentor => mentor.id === mentorId);
    // Add the hired mentor to the list
    this.setState({ hiredMentors: [...hiredMentors, mentorToHire] });
  };

  render() {
    const { selectedDomain, mentors, hiredMentors } = this.state;

    // Extract unique domains from the mentor data
    const uniqueDomains = [...new Set(mentors.map(mentor => mentor.domain))];

    return (
      <div className="container-fluid">
        <div style={{backgroundImage:'url(https://media.licdn.com/dms/image/D5612AQEFH8NFvLwFhA/article-cover_image-shrink_600_2000/0/1689455091076?e=2147483647&v=beta&t=RJvZOW5gMrXsWDkpzjJ3uoIv684a4BfEUW8X3IB3imQ)', backgroundSize: 'cover', backgroundPosition: 'center',height:'90vh'}}>
          <div className="container" style={{paddingTop:'5rem'}}>
            <div className="row justify-content-start">
              <div className="col-md-6 text-start" style={{marginTop:'10rem',color:'white'}}>
                <div className="subcon" >
                  <h1 style={{fontSize:'3.5rem',color:'black'}}>Unlock  Guidance</h1>
                  <p style={{color:'black'}}>Book a session with unstoppable mentors across domains & work together to build your career!</p>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-start" style={{ color: 'white'}}>
              <div className="col-md-6" style={{maxWidth:'13rem',fontSize:'6rem'}}>
                <button type="button" className="btn btn-danger mb-2 me-2 d-block" style={{borderRadius:'100px'}}>Find a Mentor</button>
              </div>
              <div className="col-md-6">
                <button type="button" className="btn btn-info mb-2 me-2 d-block" style={{borderRadius:'100px'}}>Be a Mentor</button> 
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{paddingTop:'4rem'}}>
          {/* Domain selection buttons */}
          <div className="row">
            {/* Render domain buttons dynamically */}
            {uniqueDomains.map(domain => (
              <div className="col" key={domain}>
                <button
                  className={`btn btn-outline-primary ${selectedDomain === domain ? 'active' : ''}`}
                  onClick={() => this.handleDomainSelect(domain)}
                >
                  {domain}
                </button>
              </div>
            ))}
          </div>

          {/* Mentor cards */}
          <div className="row" style={{paddingTop:'5rem'}}>
            {mentors
              .filter(mentor => mentor.domain === selectedDomain || selectedDomain === '')
              .map(mentor => (
                <div className="col-md-3" key={mentor.id}>
                  <div className="card">
                  <img src="https://img.freepik.com/free-photo/mannequin-dressed-business-suit-3d-render-gray-background_1142-51075.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714262400&semt=ais" class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{mentor.name}</h5>
                      <p className="card-text">{mentor.domain}</p>
                      <p className="card-text">{mentor.quality}</p>
                      {/* Button to hire mentor */}
                      <button
                        className="btn btn-primary"
                        onClick={() => this.handleHireMentor(mentor.id)}
                      >
                        Hire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="container">
          <h2>Hired Mentors</h2>
          <div className="row">
            {hiredMentors.map(mentor => (
              <div className="col-md-3" key={mentor.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{mentor.name}</h5>
                    <p className="card-text">{mentor.domain}</p>
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>
              </div>
            ))}
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
    );
  }
}

export default Mentorship;
