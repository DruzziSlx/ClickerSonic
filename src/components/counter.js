import React, { Component } from 'react';
import mania from './pics/sonicmania_logo.png';
import Ring from './pics/soncring.png';

class Counter extends Component {
constructor() {
    super();
    
    this.state = {
      timesClick: 0
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
}

  handleButtonClick = () => [
    this.setState({timesClick: this.state.timesClick + 1})
  ]

  render() {
      return(
        <div>
            <img className="soniclogo" onClick={ this.handleButtonClick } src={ mania }/>
            <div>
              <p className="edit">
              You Have
              </p> 
              <div className="counterContainer">
                <center> <div className="number">{this.state.timesClick}</div> 
                <img className="ring" src={ Ring } /></center>
              </div> <p className="edit"> Rings</p>
              </div>
        </div>
      ) 
    }
}

export default Counter;