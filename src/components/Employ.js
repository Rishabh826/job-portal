import React, { Component } from 'react';

export default class Employ extends Component {
  render() {
    return (
      
      <div className="container-fluid" style={{ overflowY: 'scroll', height: '100vh' }}>
      <div className="d-flex flex-column mb-3">
        <div className="p-2">
          <nav className="navbar bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/" style={{ marginLeft: '10px' }}>
                <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1395991368.1711497600&semt=sph" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                <span style={{ marginLeft: '10px' }}>POST A JOB</span>
              </a>
              <div className="d-flex">
                <button type="button" className="btn btn-light me-2">Save</button>
                <a href="/" className="btn btn-light">Home</a>
              </div>
            </div>
          </nav>

          <form className="container mt-4">
              <div className="row g-3">
                <div className="col-md-4">
                  <label htmlFor="validationDefault01" className="form-label">Job Title:</label>
                  <input type="text" className="form-control" id="validationDefault01" required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault02" className="form-label">Job Industry:</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>Select Job Industry</option>
                    <option value="1">IT</option>
                    <option value="2">Accounting/Finance</option>
                    <option value="3">Health Care</option>
                    <option value="3">Textile</option>
                    <option value="3">Telecommunication</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault03" className="form-label">Experience:</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>Fresher</option>
                    <option value="1">Less than 2 years</option>
                    <option value="2">5 years</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault04" className="form-label">City:</label>
                  <input type="text" className="form-control" id="validationDefault04" required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault05" className="form-label">State:</label>
                  <select className="form-select" id="validationDefault05" required style={{ width: '20rem' }}>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault06" className="form-label">Zip:</label>
                  <input type="text" className="form-control" id="validationDefault06" required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault04" className="form-label">Expected salary</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>Associate</option>
                    <option value="1">Entry level</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault05" className="form-label">Gender</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>Male</option>
                    <option value="1">Female</option>
                    <option selected>Both</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationDefault06" className="form-label">Total Vacancy</label>
                  <input type="text" className="form-control" id="validationDefault06" required style={{ width: '20rem' }} />
                </div>
                <hr  style={{boxtext:'4px 2px black'}}/>
              </div>
            </form>

            <div className="container mt-4">
              <h4 className="text-center mb-4" style={{ marginRight: '9rem' }}>Location Information</h4>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="validationDefault04" className="form-label" >Location</label>
                  <input type="text" className="form-control" id="validationDefault04" required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationDefault04" className="form-label">City</label>
                  <input type="text" className="form-control" id="validationDefault04" required style={{ width: '20rem' }} />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-6">
                  <label htmlFor="validationDefault04" className="form-label">Zipcode</label>
                  <input type="text" className="form-control" id="validationDefault04" required style={{ width: '20rem' }} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationDefault05" className="form-label">Country</label>
                  <select className="form-select" aria-label="Default select example" style={{ width: '20rem' }}>
                    <option selected>1</option>
                    <option value="1">3</option>
                    <option selected>3</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />

            <div className="container mt-4">
              <h4 className="text-center mb-4" style={{ marginRight: '9rem' }}>Job Details</h4>
              <div className="input-group mb-3">
                <span className="input-group-text" style={{backgroundColor:'blueviolet'}}>Job Details</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>

              <div className="input-group mb-3" style={{marginTop:'5rem'}}>
                <span className="input-group-text" style={{backgroundColor:'blueviolet'}} >Responsibilities</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>

              <div className="input-group mb-3" style={{marginTop:'5rem'}}>
                <span className="input-group-text" style={{backgroundColor:'blueviolet'}}>Education</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>

              <div className="input-group mb-3" style={{marginTop:'5rem'}}>
                <span className="input-group-text" style={{backgroundColor:'blueviolet'}}>Other Benefits</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>
              <div className="container">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="publishedOn">Published on</label>
                    <input
                      type="date"
                      id="publishedOn"
                      name="publishedOn"
                      style={{ width: '100%' }}
                      className="form-control"
                      onChange={(e) => console.log(e.target.value)} // You can handle the change event to get the selected date
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="deadline">Deadline</label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      style={{ width: '100%' }}
                      className="form-control"
                      onChange={(e) => console.log(e.target.value)} // You can handle the change event to get the selected date
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <footer className="footer mt-auto py-3 bg-purple text-center">
          <div className="container">
            <span className="text-muted">2024 @Vyavasay</span>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}
