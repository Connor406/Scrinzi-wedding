import React from 'react';
import './Registry.css';

class Registry extends React.Component {

  render() {
    return (
      <div className='registryContainer' id='registry'>
        <h1 className='registryTitle'>We're registered at these locations</h1>
        <a href='https://www.target.com/gift-registry/' target='_blank'>
          <img className='logos' src={require('./Logos/tgt.jpg')} alt='Target'></img>
        </a>
        <a href='https://www.crateandbarrel.com/wedding-registry/' target='_blank'>
          <img className='logos' src={require('./Logos/C&B.jpg')} alt='Crate & Barrel'></img>
        </a>
      </div>
    )
  }
}

export default Registry;