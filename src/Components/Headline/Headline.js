import React from 'react';
import './Headline.css';

class Headline extends React.Component {
  render() {
    return (
      <div className='Headline'>
        <div className='overlay'>
          <div className='nameContainer'>
            <h1 className='Names'>Emma & Jacopo</h1>
            <h6 className='date'>07.09.22</h6>
          </div>
        </div>
      </div>
    )
  }
};

export default Headline;