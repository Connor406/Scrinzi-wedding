import React from 'react';
import "./Navbar.css";
import {FaArrowCircleUp} from 'react-icons/fa';


class Navbar extends React.Component {

  render() {

    const scrollTop = () => {
      window.scrollTo({top: 0});
    };

    return (
      <div className='Navbar' >
        <a href='#Story' >
          <h4>Our Story</h4>
        </a>
        <a href='#DetailAnchor'>
          <h4>Details</h4>
        </a>
        <a href='#RSVPblock'>
          <h3 className='rsvpLink'>RSVP</h3>
        </a>
        <a href='#gallery'>
          <h4>Gallery</h4>
        </a>
        <a href='#registry'>
          <h4>Registry</h4>
        </a>
        <div className='scrollToTop'>
          <h5 className='Top'><FaArrowCircleUp onClick={scrollTop} /></h5>
        </div>
      </div>
    )
  }
};

export default Navbar;