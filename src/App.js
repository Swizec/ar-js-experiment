import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import 'aframe';
/* import 'aframe-particle-system-component';
   import { Entity, Scene } from 'aframe-react'; */

import { Scene, Entity } from 'aframe-react';

class App extends Component {
    render() {
        const skinUrl = '/skins/jetienne.png';

        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>

                    <a-anchor hit-testing-enabled="true">
                        <Entity minecraft={`heightMeter: 2; skinUrl: ${skinUrl}`}
                                minecraft-head-anim="yes"
                                minecraft-body-anim="hiwave" />
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </Scene>
            </div>
        );
    }
}

export default App;
