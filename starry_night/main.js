import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';






const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 30, 100 );
controls.update();

const listener = new THREE.AudioListener();
camera.add( listener );

const geometry = new THREE.TorusGeometry( 20, 6, 20, 60 ); 
const material = new THREE.MeshNormalMaterial( { color: 0x00ffff , wireframe:true} ); 
const torus = new THREE.Mesh( geometry, material ); scene.add( torus );
scene.add(torus)

//resizes
const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );

const gridHelper = new THREE.GridHelper( 500, 100 );
scene.add( gridHelper );
function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
  torus.rotation.z += 0.01
  

	renderer.render( scene, camera );

}
animate()
