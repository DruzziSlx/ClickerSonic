import React, { Component } from 'react';

class Upgrades extends Component {
    
    render() {
      return(
        <div className="container">

          <div className="upgrade_1">
            <h1>Sanic</h1>
            <p> This upgrade will make your sonic just a bit faster
            even though it might be retarded </p>
            <p className="description"> makes more points per second 
            but skips a few beats</p>
          </div>

          <div className="Upgrade_2">
            <h1>Talls</h1>
            <p>Fly away with all the rings</p>
            <p className="description_2"> more rings per click </p>
          </div>

          <div className="Upgrade_3">
            <h1>Knackles</h1>
            <p>& points</p>
            <p className="description_3"> generates 1-5 more rings per 
            ring that sanic generates </p>
          </div>

          <div className="Upgrade_4">
            <h1>Sponbill</h1>
            <p>Got to go fast</p>
            <p className="description_4"> makes sanic generate more 
            with his new ability spindash</p>
          </div>

          <div className="Upgrade_5">
            <h1>1-oop</h1>
            <p>another life another try, more rings too collect</p>
            <p className="description_5">  </p>
          </div>

        </div>
    )
  }
}

export default Upgrades;