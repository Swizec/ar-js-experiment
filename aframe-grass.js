
AFRAME.registerComponent('grass', {
    schema: {},
    init: function () {
        var geometry = new THREE.PlaneBufferGeometry( 100, 100 );
	var texture = new THREE.CanvasTexture( this.generateTexture() );
	for ( var i = 0; i < 15; i ++ ) {
	    var material = new THREE.MeshBasicMaterial( {
		color: new THREE.Color().setHSL( 0.3, 0.75, ( i / 15 ) * 0.4 + 0.1 ),
		map: texture,
		depthTest: false,
		depthWrite: false,
		transparent: true
	    } );
	    var mesh = new THREE.Mesh( geometry, material );
	    mesh.position.y = i * 0.25;
	    mesh.rotation.x = - Math.PI / 2;
        }

        console.log('MESH:', mesh);

        this.el.setObject3D('mesh', mesh);
    },
    generateTexture: function () {
	var canvas = document.createElement( 'canvas' );
	canvas.width = 512;
	canvas.height = 512;
	var context = canvas.getContext( '2d' );
	for ( var i = 0; i < 20000; i ++ ) {
	    context.fillStyle = 'hsl(0,0%,' + ( Math.random() * 50 + 50 ) + '%)';
	    context.beginPath();
	    context.arc( Math.random() * canvas.width, Math.random() * canvas.height, Math.random() + 0.15, 0, Math.PI * 2, true );
	    context.fill();
	}
	context.globalAlpha = 0.075;
	context.globalCompositeOperation = 'lighter';
	return canvas;
    }

});
