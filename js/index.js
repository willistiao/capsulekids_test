import "regenerator-runtime/runtime.js";
import * as THREE from "three";
import { InteractionManager } from "three.interactive";

import createCube from './createCube.js';
import createLight from "./createLight.js";
import animate from "./animate.js";
import createCamera from "./createCamera.js";
import createRenderer from "./createRenderer.js";
import createScene from "./createScene.js";



const TWEEN = require('@tweenjs/tween.js');


const renderer = createRenderer();
const scene = createScene();
const camera = createCamera();
const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);

const cubes = {
  pink: createCube({ color: 0xff00ce, x: -1, y: -1 }),
  purple: createCube({ color: 0x9300fb, x: 1, y: -1 }),
  blue: createCube({ color: 0x0065d9, x: 1, y: 1 }),
  cyan: createCube({ color: 0x00d7d0, x: -1, y: 1 })
};


const light = createLight();

for (const [name, object] of Object.entries(cubes)) {
  object.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log(`${name} cube was clicked`);
    const cube = event.target;
    const coords = { x: camera.position.x, y: camera.position.y };
    new TWEEN.Tween(coords)
      .to({ x: cube.position.x, y: cube.position.y })
      .easing(TWEEN.Easing.Quadratic.Out)
      .onUpdate(() =>
        camera.position.set(coords.x, coords.y, camera.position.z)
      )
      .start();
  });
  interactionManager.add(object);
  scene.add(object);
}

scene.add(light);

animate((time) => {
  renderer.render(scene, camera);
  interactionManager.update();
  TWEEN.update(time);
});