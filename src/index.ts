import { v4 as uuidv4 } from 'uuid';
import * as THREE from 'three';

import { MOCK_REC_WOOD_DECK, MOCK_L_WOOD_DECK } from './constants/index';

type T3DOject = {
  title: string;
  subTitle?: string;
  objectImage: string;
  id: string;
  objectTypeId: string;
  onParameterChanged: (values: any) => any;
};

const RectWoodDeck: T3DOject = {
  id: uuidv4(),
  objectTypeId: 'WOOD_DECK',
  title: 'RectWoodDeck',
  objectImage: '/images/2d_deck.png',
  onParameterChanged: (values: any) => {
    console.log('onParameterChanged', values);

    return MOCK_REC_WOOD_DECK;
  },
};

const LWoodDeck: T3DOject = {
  id: uuidv4(),
  objectTypeId: 'L_WOOD_DECK',
  title: 'LWoodDeck',
  objectImage: '/images/l_2d_deck.png',
  onParameterChanged: (values: any) => {
    console.log('onParameterChanged', values);

    return MOCK_L_WOOD_DECK;
  },
};

const showDialogParameter = (object3D: T3DOject) => {
  console.log('showDialogParameter', object3D);

  return object3D;
};

const getListObject = () => {
  return [RectWoodDeck, LWoodDeck];
};

const drawScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(500, 500);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
};

export { getListObject, showDialogParameter, drawScene };
