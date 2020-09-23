import React from 'react';
import './Gallery.css';

class Gallery extends React.Component {

  render(){
    const baseUrl = './Pics/';
    return(
      <div className='galleryContainer' id='gallery'>
        <h1 className='galleryTitle'>Gallery</h1>
        {
          this.props.srcArray.map((image) => {
            return (<img className='galleryImage' src={baseUrl + image.src} alt='broken'></img>);
          })
        }
      </div>
    )
  }
};

export default Gallery;