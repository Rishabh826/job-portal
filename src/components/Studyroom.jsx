import React, {  useRef } from 'react';

const Studyroom = () => {
 
  const videoRef = useRef(null);
  const streamRef = useRef(null); 

  const handleVideoPlay = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      streamRef.current = stream; 
       
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };
  function playSound() {
    const song = document.getElementById("kase hua");
    song.play();
  }
  const handleVideostop = async() => {
    const stream = streamRef.current;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      streamRef.current = null;
    }
  };

  return (
    <div className="container-fluid">
      <div
        style={{
          backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/014/960/337/non_2x/cyan-background-hd-pictures-and-blue-wallpaper-for-free-download-free-photo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
        }}
      >
        <div className="container" style={{ marginTop: '6rem' }}>
          <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
            <div className="col-md-8 text-center" style={{ color: 'white' }}>
              <h1 style={{ fontSize: '4rem', color: 'black' }}>Welcome to Your Study Room</h1>
              <p style={{ fontSize: '1.5rem', color: 'black' }}>
                A peaceful place to focus, learn, and grow.
              </p>
              <div className="box">
                <button
                  type="button"
                  className="btn btn-light"
                  style={{ fontSize: '1.2rem', padding: '0.5rem 2rem' }}
                  onClick={handleVideoPlay}
                >
                  Start Study
                </button>
                <video
                  autoPlay
                  style={{ marginTop: '2rem', width: '10rem', height: '10rem' }}
                  className="w-100"
                  ref={videoRef}
                  id="myvideo"
                ></video>
                <div className="box">
                <button
                  type="button"
                  ref={streamRef}
                  
                  className="btn btn-light"
                  style={{ fontSize: '1.2rem', padding: '0.5rem 2rem',color:'red' }}
                  onClick={handleVideostop}
                >
                  Stop
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Resources Section */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <h2 className="text-center">Study Resources</h2>
        <p className="text-center">
          Access a variety of resources to help you study effectively.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://i.pinimg.com/originals/73/bd/80/73bd8000bfdbb42e6c480a54fcdb0080.gif"
                className="card-img-top"
                alt="Resource 1" style={{height:'200px'}}
              />
              <div className="card-body">
                <h5 className="card-title">E-books</h5>
                <p className="card-text">
                  Explore our collection of e-books to enhance your learning.
                </p>
                <a href="#" className="btn btn-primary">
                  View E-books
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://yourartpath.com/wp-content/uploads/2018/10/gif-min.png"
                className="card-img-top"
                alt="Resource 2" style={{height:'220px'}}
              />
              <div className="card-body">
                <h5 className="card-title">Video Tutorials</h5>
                <p className="card-text">
                  Watch video tutorials on various topics.
                </p>
                <a href="#" className="btn btn-primary">
                  Watch Videos
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGC5KgsrzBRK66BGS9GkXTqjb5MRazW0zIw&s"
                className="card-img-top"
                alt="Resource 3" 
              />
              <div className="card-body">
                <h5 className="card-title">Practice Quizzes</h5>
                <p className="card-text">
                  Test your knowledge with our practice quizzes.
                </p>
                <a href="#" className="btn btn-primary">
                  Take a Quiz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="container" style={{ marginTop: '3rem' ,backgroundImage:'url(https://t4.ftcdn.net/jpg/05/79/54/53/360_F_579545387_6JuKZXKyBuvrGTVxcCIXPZnE5cr41vC9.jpg)',color:'white'}}>
        <h2 className="text-center">Study Tools</h2>
        <p className="text-center">Utilize these tools to aid your study sessions.</p>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://cdn.dribbble.com/users/25884/screenshots/2401179/pomodoro10.gif"
                className="card-img-top"
                alt="Tool 1" style={{height:'250px'}}
              />
              <div className="card-body">
                <h5 className="card-title">Pomodoro Timer</h5>
                <p className="card-text">
                  Boost your productivity with the Pomodoro Technique.
                </p>
                <a href="#" className="btn btn-primary">
                  Start Timer
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6hUk7VuvUj5LxGCbWznTEKzSDKKeBQj8f67BE4KeHPQyliwVGw7eYLlFT7rAttlXs78&usqp=CAU"
                className="card-img-top"
                alt="Tool 2" style={{height:'250px'}}
              />
              <div className="card-body">
                <h5 className="card-title">Flashcards</h5>
                <p className="card-text">
                  Use flashcards to memorize key concepts.
                </p>
                <a href="#" className="btn btn-primary">
                  View Flashcards
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetr1oMvfUqDfOupxMcriHGa4KvBWTEz3XTw&s"
                className="card-img-top"
                alt="Tool 3"
              />
              <div className="card-body">
                <h5 className="card-title">Study Planner</h5>
                <p className="card-text">
                  Plan your study sessions with our study planner.
                </p>
                <a href="#" className="btn btn-primary">
                  Plan Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Atmosphere Section */}
      <div className="container" style={{ marginTop: '3rem' }}>
        <h2 className="text-center">Create the Perfect Study Atmosphere</h2>
        <p className="text-center">
          Choose from calming music, background sounds, or ambient lighting to set the perfect study environment.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://i.pinimg.com/originals/9d/93/5c/9d935c5a5e2dcc9f8a1f7b4e21abba57.gif"
                className="card-img-top"
                alt="Atmosphere 1" style={{height:'255px'}}
              />
              <div className="card-body">
                <h5 className="card-title">Calming Music</h5>
                <p className="card-text">
                  Listen to soothing music to enhance focus and relaxation.
                </p>
                <a href="https://www.youtube.com/watch?v=HCWvgoTfUjg&t=1031s" className="btn btn-primary">
                  Play Music
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://i.pinimg.com/originals/c1/10/48/c1104815c8a8445cb8223a5ef566cfd9.gif"
                className="card-img-top"
                alt="Atmosphere 2"
              />
              <div className="card-body">
                <h5 className="card-title">Background Sounds</h5>
                <p className="card-text">
                  Choose from nature sounds, white noise, and more.
                </p>
                <a     onClick={playSound} className="btn btn-primary">
                  Play Sounds
                </a>
                <audio  id="kase hua" className="audio-player" src="src/music/kase hua.mp3"></audio>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-3">
              <img
                src="https://img.pikbest.com/video/cover/2021-12-09/E9328501-AD97-0671-8795-07150D58A90F.gif!sw800"
                className="card-img-top" 
                alt="Atmosphere 3" style={{height:'255px'}}
              />
              <div className="card-body">
                <h5 className="card-title">Ambient Lighting</h5>
                <p className="card-text">
                  Adjust the lighting to suit your mood and focus.
                </p>
                <a href="#" className="btn btn-primary">
                  Change Lighting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer mt-5" style={{ background: 'linear-gradient(30deg,rgb(13,153,181),rgb(8,210,250))', color: 'white', borderRadius: '10px', padding: '10px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: info@studyroom.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Resources</a></li>
                <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Tools</a></li>
                <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Atmosphere</a></li>
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
              <p>&copy; 2024 Study Room. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studyroom;
