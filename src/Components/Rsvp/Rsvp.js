import React from 'react';
import './Rsvp.css';
import logo from './pic.jpg';

class Rsvp extends React.Component {
  render() {
    return (
      <div id='RSVPblock'>
        <div className='container' >
          <div className='overlayRSVP'>
            <img src={logo}></img>
            <input className='box' type='text' placeholder="Name" ></input>
            <input className='box' type='email' placeholder="Email" ></input>
            <label>
              <input type='radio' ></input>
              <span className='checkbox' ></span>
                Plus one?
            </label>
          </div>
        </div>
      </div>
    )
  }
};


export default Rsvp;