
AFRAME.registerComponent('hurricane', {
    schema: {
    },
    init: function() {
        const el = this.el;

	// The GPU Particle system extends THREE.Object3D, and so you can use it
	// as you would any other scene graph component.	Particle positions will be
	// relative to the position of the particle system, but you will probably only need one
	// system for your whole scene

	this.particleSystem = new THREE.GPUParticleSystem( {
	    maxParticles: 250000
	} );
        console.log("PARTICLE SYSTEM", this.particleSystem);
        this.el.setObject3D('particle-system', this.particleSystem);

	// options passed during each spawned
	this.options = {
	    position: new THREE.Vector3(),
	    positionRandomness: .3,
	    velocity: new THREE.Vector3(),
	    velocityRandomness: .5,
	    color: 0xaa88ff,
	    colorRandomness: .2,
	    turbulence: .5,
	    lifetime: 2,
	    size: 5,
	    sizeRandomness: 1
	};
	this.spawnerOptions = {
	    spawnRate: 100,
	    horizontalSpeed: 1.5,
	    verticalSpeed: 1.33,
	    timeScale: 1
	};
    },
    tick: function (now, delta) {
       const { options, spawnerOptions, particleSystem } = this;

         if ( delta > 0 ) {
           options.position.x = Math.sin( now * spawnerOptions.horizontalSpeed ) * 20;
           options.position.y = Math.sin( now * spawnerOptions.verticalSpeed ) * 10;
           options.position.z = Math.sin( now * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed ) * 5;
             for ( var x = 0; x < spawnerOptions.spawnRate * delta; x++ ) {
                 // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
                 // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
                 particleSystem.spawnParticle( options );
             }
         }



        particleSystem.update( now );
    }
});
