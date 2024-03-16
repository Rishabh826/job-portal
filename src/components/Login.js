import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default class Login extends Component {
  render() {
    return (
      <div className='bg-dark' style={{ border: '2px solid white', backgroundImage: 'url(https://images.unsplash.com/photo-1618774491942-b6d0c9717426?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="p-3 mb-2 text-dark" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="login-container" style={{ borderRadius: '20px', width: '90%', maxWidth: '420px', borderWidth: '2px', borderColor: 'white', borderStyle: 'solid', backdropFilter: 'blur(10px)' }}>
            <div className="card bg-transparent card-blur" style={{ padding: '20px' }}>
              <div className="login-title text-center font-weight-bold" style={{ color: 'white', backgroundColor: 'blur', marginTop: '20px' }}><h3>Login</h3></div>
              
              <form>
                <div className="form-group mx-3" >
                  <input type="text" className="form-control login-input" style={{ backgroundColor: 'transparent',color:'white', borderTop: '1px', borderRight: '1px', borderLeft: '1px' }} placeholder="Username or e-mail" />
                </div>
                <div className="form-group mx-3 my-3">
                  <input type="password" style={{ backgroundColor: 'transparent', borderTop: '1px', borderRight: '1px', borderLeft: '1px' }} className="form-control login-input" placeholder="Password" />
                  <div className="form-check d-flex align-items-center">
                    <input type="checkbox" className="form-check-input" style={{ marginTop: '20px' }} />
                    <label htmlFor="/" className="form-check-label" style={{ color: 'white',marginLeft:'10px',marginTop:'15px' }}>Remember Me</label>
                  </div>
                  <div>
                  <Link className="forgot-link" to="/">
                    <h7 style={{color:'blue'}}>Forgot Password ?</h7>
              </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{ width: '90%', color: 'black', backgroundColor: 'white', borderRadius: '100px' }}><strong>Continue</strong></button>
                <hr />
                <p style={{ color: 'white', marginLeft: '15px' }}>By Continue, you agree to jaggery world's <strong>Terms and  conditions</strong></p>
                <div className="d-flex justify-content-center" style={{ color: 'white' }}>
                  <p>New to Jaggery world?</p>
                </div>
                <Link className="d-flex justify-content-center" to="/Signup">
                  <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{ width: '100%', background: 'white', color: 'black', borderRadius: '100px' }}><strong>Create your new Jaggery account</strong></button>
                </Link>
              </form>
              <div className="d-flex justify-content-center" style={{ color: 'white' }}>
                <h7>OR Sign up using</h7>
              </div>
              <div className="d-flex justify-content-center" style={{ fontSize: '30px', wordSpacing: '30px' }}>
              <Link className="google-link" to="/Bsfillpersonfill">
              <FcGoogle style={{ marginRight: '30px', marginTop: '20px' }} />
              </Link>
              <Link className="facebook-link" to="/Bsfillpersonfill">
              <FaFacebookSquare style={{ marginRight: '30px', marginTop: '20px' ,color:'blue'}} />
              </Link>
              <Link className="twitter-link" to="/Bsfillpersonfill">
              <FaXTwitter style={{ marginTop: '20px' , color:'black'}} />
              </Link>
            
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
