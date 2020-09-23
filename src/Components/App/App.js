import React from 'react';
import './App.css';
import Headline from '../Headline/Headline';
import Navbar from '../Navbar/Navbar';
import Rsvp from '../Rsvp/Rsvp';
import Details from '../Details/Details';
import Story from '../Story/Story';
import Gallery from '../Gallery/Gallery';
import srcArray from '../Gallery/Images';
import Registry from '../Registry/Registry';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      srcArray: srcArray
    };
  }


  render() {
    return (
      <div className='AppContainer'>
        <div className="App">
          <Navbar />
          <div className='overlay'>
            <Headline />
          </div>
        </div>
        <Story />
        <Details />
        <Rsvp />
        <Gallery srcArray={this.state.srcArray} />
        <Registry />
      </div>
    );
  }
};

export default App;
