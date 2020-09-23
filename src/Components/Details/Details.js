import React from 'react';
import './Details.css';

class Details extends React.Component {
  render() {
    return(
      <div className='DetailsContainer' id='DetailAnchor'>
        <div className='textContainer'>
          <h2>You're invited</h2>
          <table className='dasTable'>
            <th className='tableRow'>         
              <tr className='tableQ'>When</tr>
              <tr className='tableQ'>Where</tr>
            </th>
            <th className='tableRow'> 
              <tr className='tableResponse'>July 09, 2022</tr>        
              <tr className='tableResponse'>Somewhere in Italy</tr>
            </th> 
          </table>
        </div>
        <div className='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.6671330002055!2d11.093515911190483!3d45.92201239435897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47820bbe731570d5%3A0x9683855bfa24d1c9!2sCastel%20Pietra%20-%20Event%20Location!5e1!3m2!1sen!2sus!4v1600393972514!5m2!1sen!2sus" frameBorder='0' width='450' height='450' allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
        </div>
      </div>
    )
  }
};

export default Details;