import React, { Component } from 'react';

export default class Hackathons extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* Background Section */}
        <div
          style={{
            backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/9505a264034373.5ac4def3850d3.gif)', // Replace with your background image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
          }}
        >
       
        </div>

        {/* Main Content Section */}
        <div className="row" style={{ marginTop: '5rem' }}>
          <div className="col">
            <div className="card text-bg-dark">
              <img
                src="https://media.licdn.com/dms/image/D4E10AQEDO8OS1P4sIw/image-shrink_800/0/1694505610019?e=2147483647&v=beta&t=ZAgfx8QW-oYDWjIjAUHxPpgPD7TX-iq_9GOaa-eQ7P4" // Replace with your image URL
                className="card-img"
                alt="Hackathon 1"
              />
             
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <img
                src="https://pages.near.org/wp-content/uploads/2020/08/htr-logo-animate_blk2.gif" // Replace with your image URL
                className="card-img"
                alt="Hackathon 2"
              />
             
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '5rem' }}>
          <h1>Featured Hackathons</h1>
          <p>
            Dive into our featured hackathons and start coding for a chance to win big. <span style={{ color: 'rgb(0,128,255)' }}>Exciting prizes await!</span>
          </p>
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWx5Zd-nZ4wdgZ4WFlHwW3XZkTzF-rUnfxhw&s" // Replace with your image URL
                  className="card-img-top"
                  alt="Hackathon 3"
                />
                <div className="card-body">
                  <h5 className="card-title">AI Innovations</h5>
                  <p className="card-text">
                    Push the boundaries of AI with our AI Innovations hackathon. Show off your skills in machine learning and AI.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvm7ghq0z4l9EZxDu7KkFatdQZSFrppBsIg&s" // Replace with your image URL
                  className="card-img-top"
                  alt="Hackathon 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Green Tech</h5>
                  <p className="card-text">
                    Innovate for a sustainable future with our Green Tech hackathon. Create solutions to combat climate change.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/13/full/1631476998-6515.jpg" // Replace with your image URL
                  className="card-img-top"
                  alt="Hackathon 5"
                />
                <div className="card-body">
                  <h5 className="card-title">FinTech Challenge</h5>
                  <p className="card-text">
                    Solve real-world problems in the financial industry with our FinTech Challenge. Show your expertise in finance and tech.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://cdn.dribbble.com/users/1023705/screenshots/3661938/pepper.gif" // Replace with your image URL
                  className="card-img-top"
                  alt="Hackathon 6"
                />
                <div className="card-body">
                  <h5 className="card-title">Health Tech</h5>
                  <p className="card-text">
                    Innovate in healthcare with our Health Tech hackathon. Create solutions to improve healthcare systems.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '5rem' }}>
          <h1>Festival Highlights</h1>
          <p>Experience the best moments from our recent tech festivals and get inspired.</p>
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://tetsocollege.org/wp-content/uploads/2023/03/radiance.png" // Replace with your image URL
                  className="card-img-top"
                  alt="Festival 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Tech Fest 2023</h5>
                  <p className="card-text">
                    Relive the excitement of Tech Fest 2023 with highlights, keynote sessions, and more.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKr9zJoLJ0iIHeBzuD7i21UXgoey5icdc6A&s" // Replace with your image URL
                  className="card-img-top"
                  alt="Festival 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Innovation Summit</h5>
                  <p className="card-text">
                    Dive into the highlights of the Innovation Summit and see how tech leaders are shaping the future.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgm6f8s_MN3MSrgT_XTKiGB7RFei5HuKM4xaWbC_drBNwEb6dExGuKt1A0KAmTMFsj9k&usqp=CAU" // Replace with your image URL
                  className="card-img-top"
                  alt="Festival 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Startup Expo</h5>
                  <p className="card-text">
                    Discover the next big thing at the Startup Expo. Meet the brightest entrepreneurs and their groundbreaking ideas.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWH5IP-aVr7B8iW6gOn9hrv3uNON9n6XAsbA&s" // Replace with your image URL
                  className="card-img-top"
                  alt="Festival 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Developer Week</h5>
                  <p className="card-text">
                    Experience the best of Developer Week. From coding sessions to tech talks, there's something for every developer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div
          className="footer mt-5"
          style={{
            background: 'linear-gradient(30deg,rgb(13,153,181),rgb(8,210,250))',
            color: 'white',
            borderRadius: '10px',
            padding: '10px',
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <h5>Contact Us</h5>
                <p>Email: info@hackathonfest.com</p>
                <p>Phone: +1234567890</p>
              </div>
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                  <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Events</a></li>
                  <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
                  <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Social Media</h5>
                <ul className="list-inline" style={{ color: 'white' }}>
                  <li className="list-inline-item"><a href="/" style={{ color: 'white', textDecoration: 'none' }}><i className="fab fa-facebook"></i> Facebook</a></li>
                  <li className="list-inline-item"><a href="/" style={{ color: 'white', textDecoration: 'none' }}><i className="fab fa-twitter"></i> Twitter</a></li>
                  <li className="list-inline-item"><a href="/" style={{ color: 'white', textDecoration: 'none' }}><i className="fab fa-instagram"></i> Instagram</a></li>
                  <li className="list-inline-item"><a href="/" style={{ color: 'white', textDecoration: 'none' }}><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 text-center">
                <p>&copy; 2024 Hackathon Fest. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
