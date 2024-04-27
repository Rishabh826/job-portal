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
      <div className="row">
  <div className="col">
    <div class="card text-bg-dark">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_3aLPjkumTXRE5xBD3xQCXEO4JQDcfpe7U9jUB4wWA&s" class="card-img" alt="..."/>
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card text-bg-dark">
      <img src="https://c4.wallpaperflare.com/wallpaper/172/34/484/code-coding-geek-programmer-wallpaper-preview.jpg" class="card-img" alt="..."/>
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

        </div>
    
    )
  }
}
