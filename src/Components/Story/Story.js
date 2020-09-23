import React from 'react';
import './Story.css';

class Story extends React.Component {
  render() {
    return (
      <div className='OurStory' id='Story'>
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor *disclaimer: this is not their real story.* in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

export default Story;