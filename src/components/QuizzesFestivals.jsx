import React, { Component } from 'react';

export default class QuizzesFestivals extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* Background Section */}
        <div
          style={{
            backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/19/99/80/360_F_219998038_1RgWtMp4G21KZQhmzGl1fE8rY8d1wmQn.jpg)', // Replace with your background image URL
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
                src="https://gifdb.com/images/high/quiz-time-andy-shine-animated-cartoon-fuc4x3k3vrlaqpm9.gif" // Replace with your image URL
                className="card-img"
                alt="Quiz 1"
              />
             
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark">
              <img
                src="https://blog.lootcrate.com/wp-content/uploads/2020/04/tumblr_nveq6eSUd71uhyjdxo1_500.gif" // Replace with your image URL
                className="card-img"
                alt="Festival 1"
              />
             
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '5rem' }}>
          <h1>Featured Quizzes</h1>
          <p>
            Challenge yourself with our featured quizzes and compete with others. <span style={{ color: 'rgb(0,128,255)' }}>Are you ready?</span>
          </p>
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://www.riddle.com/imageservice/q_80,f_auto,c_fill,w_960,h_540/l4layamaknh6rgnucxdq" // Replace with your image URL
                  className="card-img-top"
                  alt="Quiz 2"
                />
                <div className="card-body">
                  <h5 className="card-title">History Quiz</h5>
                  <p className="card-text">
                    Dive into the past with our history quiz. How well do you know historical events and figures?
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
                  src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/05/31222229/The-Pop-Culture-Pop-Quiz_Blog.png" // Replace with your image URL
                  className="card-img-top"
                  alt="Quiz 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Pop Culture Quiz</h5>
                  <p className="card-text">
                    Test your knowledge of movies, music, and TV shows with our pop culture quiz.
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
                  src="https://miro.medium.com/v2/resize:fit:1012/1*3utV6GZw_L02vp-xDzkjbA.gif" // Replace with your image URL
                  className="card-img-top"
                  alt="Quiz 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Technology Quiz</h5>
                  <p className="card-text">
                    Are you a tech enthusiast? Prove it by taking our technology quiz.
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
                  src="https://static01.nyt.com/images/2019/03/28/sports/zion-promo/zion-promo-superJumbo.gif" // Replace with your image URL
                  className="card-img-top"
                  alt="Quiz 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Sports Quiz</h5>
                  <p className="card-text">
                    Show off your sports knowledge with our comprehensive sports quiz. How much do you know about your favorite teams?
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
          <p>Relive the best moments from our recent festivals and get inspired by the creativity and talent on display.</p>
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/830b1c57675577.59e0ac1bc6ad2.gif" 
                  className="card-img-top"
                  alt="Festival 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Art & Culture Festival</h5>
                  <p className="card-text">
                    Discover the rich diversity of art and culture at our online festival. Watch highlights, performances, and more.
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZik70A6pfqadZsA68TfJ0c1V5lzFHD2MeA&s" // Replace with your image URL
                  className="card-img-top"
                  alt="Festival 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Food Festival</h5>
                  <p className="card-text">
                    Enjoy culinary delights and cooking demos from our recent food festival. Explore the world of flavors from your home.
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
                  src="https://media.gettyimages.com/id/1030433352/video/gif-lady-gaga-at-75th-venice-international-film-festival-gif-on-august-28-2018-in-venice-italy.jpg?s=640x640&k=20&c=IFgwLtW59dfrjFfNHimQZmbSkjoSpJxjT9umaEiOJ6U=" // Replace with your image URL
                  className="card-img-top"
                  alt="Festival 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Film Festival</h5>
                  <p className="card-text">
                    Catch the best films and documentaries from our online film festival. From indie hits to classic favorites, there's something for everyone.
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
                  src="https://i.pinimg.com/originals/79/1c/cc/791ccc1c0534dbca3fc104d886d3c4b1.gif" // Replace with your image URL
                  className="card-img-top"
                  alt="Festival 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Tech Festival</h5>
                  <p className="card-text">
                    Dive into the latest tech innovations and trends at our tech festival. Watch keynote speeches, product demos, and more.
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
                <p>Email: info@quizzesfestivals.com</p>
                <p>Phone: +1234567890</p>
              </div>
              <div className="col-md-4">
                <h5>Quick Links</h5>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                  <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Quizzes</a></li>
                  <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Festivals</a></li>
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
                <p>&copy; 2024 Quizzes & Festivals. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
