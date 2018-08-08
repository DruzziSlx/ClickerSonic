import React, { Component } from 'react';
import Counter from './counter';
import Upgrades from './upgrades';

class App extends Component { 

  render() {
    return (
      <div>
        <div className="overall">
          <h1 id="maintitle">Sonic Clicker</h1>
            <p id="blockline_logo_1"></p>
            <Counter />
            <p id="blockline_logo_2"></p>
            <p id="blockline_1"> </p>
            <p id="describeclick">Click button to increase your ring total</p>
            <p id="blockline_2"> </p>
          <Upgrades />
        </div>
      <div id="blockline_3"> </div>
      <div id="blockline_4"> </div>
      </div>
    )
  }
}


export default App;
