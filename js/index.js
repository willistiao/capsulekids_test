import "regenerator-runtime/runtime.js";
import * as THREE from "three";
// import { InteractionManager } from "three.interactive";

alert('hello');

// import createCube from "./createCube";
// import createLight from "./createLight";
// import animate from "./animate";
// import createCamera from "./createCamera";
// import createRenderer from "./createRenderer";
// import createScene from "./createScene";

// const TWEEN = require('@tweenjs/tween.js');


// const renderer = createRenderer();
// const scene = createScene();
// const camera = createCamera();
// const interactionManager = new InteractionManager(
//   renderer,
//   camera,
//   renderer.domElement
// );

// const cubes = {
//   pink: createCube({ color: 0xff00ce, x: -1, y: -1 }),
//   purple: createCube({ color: 0x9300fb, x: 1, y: -1 }),
//   blue: createCube({ color: 0x0065d9, x: 1, y: 1 }),
//   cyan: createCube({ color: 0x00d7d0, x: -1, y: 1 })
// };

// const light = createLight();

// for (const [name, object] of Object.entries(cubes)) {
//   object.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log(`${name} cube was clicked`);
//     const cube = event.target;
//     const coords = { x: camera.position.x, y: camera.position.y };
//     new TWEEN.Tween(coords)
//       .to({ x: cube.position.x, y: cube.position.y })
//       .easing(TWEEN.Easing.Quadratic.Out)
//       .onUpdate(() =>
//         camera.position.set(coords.x, coords.y, camera.position.z)
//       )
//       .start();
//   });
//   interactionManager.add(object);
//   scene.add(object);
// }

// scene.add(light);

// animate((time) => {
//   renderer.render(scene, camera);
//   interactionManager.update();
//   TWEEN.update(time);
// });



// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}