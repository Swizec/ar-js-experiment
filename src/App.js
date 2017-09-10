import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'aframe-particle-system-component';
import 'aframe-environment-component';

import { Scene, Entity } from 'aframe-react';

class BallisticMissile extends Component {

    render() {
        const { pos } = this.props;

        return (
            <Entity geometry={{primitive: 'box', width: .2, height: 1, depth: .2}}
                    material={{roughness: 0, src: require('./texture.jpg')}}
                    scale={{x: 1, y: 1, z: 1}}
                    position={pos}

                    />
        )
    }
}


class App extends Component {
    state = {
        missile: false,
        launching: false
    }

    launch = () => {
        this.setState({
            missile: true,
            launching: true,
            missilePos: { x: 0, y: -4, z: 0 },
            missileA: { ax: 0, ay: .005, az: 0 },
            missileV: { vx: 0, vy: 0, vz: 0 }
        });
        if (!this.launched) {
            window.requestAnimationFrame(() => this.gameLoop());
            this.launched = true;
        }
    }

    gameLoop() {
        const { x, y, z } = this.state.missilePos,
              { vx, vy, vz } = this.state.missileV,
              { ax, ay, az } = this.state.missileA;

        console.log(this.state.missilePos);

        this.setState({
            missilePos: { x: x+vx, y: y+vy, z: z+vz },
            missileV: { vx: vx+ax, vy: vy+ay, vz: vz+az }
        });
        window.requestAnimationFrame(() => this.gameLoop());
    }

    render() {
        const skinUrl = 'skins/jetienne.png';
        const { missile, missilePos } = this.state;

        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>
                    <a-marker type="pattern">


                        <Entity minecraft={`heightMeter: 1; skinUrl: ${skinUrl}`}
                                minecraft-head-anim="yes"
                                minecraft-body-anim="hiwave" />
                        <Entity environment="preset: goaland" />
                    </a-marker>
                    <Entity camera />
                </Scene>
            </div>
        );
    }
}

export default App;
