import React, { Component } from 'react';

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
      <div className="container-fluid">
 <div style={{backgroundImage:'url(https://img.freepik.com/premium-photo/blank-yellow-sticky-note-pencil-navy-blue-table-background_7189-3543.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',height:'90vh'}}>
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
            <h1>Aptitude</h1>
          </div>
          <div className="row-4">
            <h1>Next Gen skills</h1>
          </div>
          <div className="row-4">
            <h1>Coding</h1>
          </div>
        </div>
      </div>
    );
  }
}
