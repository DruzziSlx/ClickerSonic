import React, { Component } from 'react';
import Counter from './counter';
import Upgrades from './upgrades';

class App extends Component { 

  render() {
    return (
      <div className="overall">
        <h1 id="maintitle">Sonic Clicker</h1>
        <Counter />
        <p id="blockline_1"> </p>
        <p id="describeclick">Click button to increase your ring total</p>
        <p id="blockline_2"> </p>
        <p id="blockline_3"> </p>
        <Upgrades />
      </div>
    )
  }
}


export default App;
