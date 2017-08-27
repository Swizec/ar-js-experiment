import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Scene>
            <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
            <Entity particle-system={{preset: 'snow'}}/>
            <Entity light={{type: 'point'}}/>
            <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
            <Entity text={{value: 'Hello, WebVR!'}}/>
        </Scene>
      </div>
    );
  }
}

export default App;
