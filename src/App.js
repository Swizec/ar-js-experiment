import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import 'aframe';
/* import 'aframe-particle-system-component';
   import { Entity, Scene } from 'aframe-react'; */

import { Scene, Entity } from 'aframe-react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>
                    <a-box position='0 0 0.5' material='opacity: 0.5;'></a-box>
                    <a-entity minecraft minecraft-head-anim="yes" minecraft-body-anim="hiwave" />
                    <a-marker-camera preset="hiro" />
                </Scene>
            </div>
        );
    }
}

export default App;
