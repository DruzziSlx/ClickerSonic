import React, { Component } from 'react';
import mania from './pics/sonicmania_logo.png';
import maniaFinger from './pics/sonicmania_right.png';
import Ring from './pics/soncring.png';

var clickOrNoClick = false;

class Counter extends Component {
constructor() {
    super();
    
    this.state = {
      timesClick: 0
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
}

  handleButtonClick() {
    this.setState({timesClick: this.state.timesClick + 1})

   
    var element = document.getElementById("yup");

    
    element.classList.remove("soniclogowaggle");
    element.classList.add("soniclogoinvis");

    setTimeout(this.swap, 300)  }

  swap() {
    var element = document.getElementById("yup")

    element.classList.remove("soniclogoinvis");
    element.classList.add("soniclogowaggle");
  }

  render() {
      return(
        <div>
              <img className="soniclogo" src={ mania } onClick={ this.handleButtonClick }/>
              <img id="yup" className="soniclogowaggle" src={ maniaFinger } onClick={ this.handleButtonClick }/>
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