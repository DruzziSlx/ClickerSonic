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
    this.onOff = this.onOff.bind(this);
}

  handleButtonClick() {
    this.setState({timesClick: this.state.timesClick + 1})

    if (this.state.timesClick % 2 != 0) {
      document.getElementsByClassName("soniclogo").setAttribute("src", "{ mania }")
    }
    else {
        document.getElementsByClassName("soniclogo").setAttribute("src", "{ maniaFinger }")
    }
  }
    onOff() {
      console.log(document.pic.src);
      console.log({mania});
      if (document.pic.src == { mania }) {
        document.pic.src={ maniaFinger };
      } 
      else if (document.pic.src == { maniaFinger }) {
        document.pic.src={ mania };
      }

    }


  render() {
      return(
        <div>
            <img className="soniclogo" src={ mania } name="pic" onClick={ this.onOff }/>            <div>
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