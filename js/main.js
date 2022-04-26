import * as THREE from './three.module.js';
// import { OrbitControls } from 'https://unpkg.com/three@0.108.0/examples/jsm/controls/OrbitControls.js';

import Stats from './stats.module.js';

let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let container, stats;
let camera, scene, renderer, mesh;
let cameraRig, activeCamera, activeHelper;
let cameraPerspective, cameraOrtho;
let cameraPerspectiveHelper, cameraOrthoHelper;
const frustumSize = 600;

init();
animate();

function init() {
	container = document.createElement('div');
	container.id = 'c';
	document.body.appendChild(container);

	scene = new THREE.Scene();

	//

	camera = new THREE.PerspectiveCamera(50, 0.5 * aspect, 1, 10000);
	camera.position.z = 2500;

	cameraPerspective = new THREE.PerspectiveCamera(150, 0.5 * aspect, 150, 1000);

	cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
	scene.add(cameraPerspectiveHelper);

	//
	cameraOrtho = new THREE.OrthographicCamera(
		(0.5 * frustumSize * aspect) / -2,
		(0.5 * frustumSize * aspect) / 2,
		frustumSize / 2,
		frustumSize / -2,
		150,
		1000
	);

	cameraOrthoHelper = new THREE.CameraHelper(cameraOrtho);
	scene.add(cameraOrthoHelper);

	//

	activeCamera = cameraPerspective;
	activeHelper = cameraPerspectiveHelper;

	// counteract different front orientation of cameras vs rig

	cameraOrtho.rotation.y = Math.PI;
	cameraPerspective.rotation.y = Math.PI;

	cameraRig = new THREE.Group();

	cameraRig.add(cameraPerspective);
	cameraRig.add(cameraOrtho);

	scene.add(cameraRig);

	//
	const loader = new THREE.TextureLoader();
	mesh = new THREE.Mesh(
		new THREE.SphereGeometry(50, 32, 16),
		// new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
		new THREE.MeshBasicMaterial({
			map: loader.load('../img/texture2.webp'),
		})
	);
	scene.add(mesh);

	const mesh2 = new THREE.Mesh(
		new THREE.SphereGeometry(15, 16, 8),
		// new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
		new THREE.MeshBasicMaterial({
			map: loader.load('../img/moonTexture.jpg'),
		})
	);
	mesh2.position.y = 150;
	mesh.add(mesh2);

	// const mesh3 = new THREE.Mesh(
	// 	new THREE.SphereGeometry(5, 16, 8),
	// 	new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
	// );
	// mesh3.position.z = 150;
	// cameraRig.add(mesh3);

	//

	const geometry = new THREE.BufferGeometry();
	const vertices = [];

	for (let i = 0; i < 100000; i++) {
		vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
		vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
		vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
	}

	geometry.setAttribute(
		'position',
		new THREE.Float32BufferAttribute(vertices, 3)
	);

	const particles = new THREE.Points(
		geometry,
		new THREE.PointsMaterial({ color: 0x888888 })
	);
	scene.add(particles);

	//

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container.appendChild(renderer.domElement);

	renderer.autoClear = false;

	//

	// stats = new Stats();
	// container.appendChild(stats.dom);

	//

	// window.addEventListener('resize', onWindowResize);
	// document.addEventListener('keydown', onKeyDown);
}

function animate() {
	requestAnimationFrame(animate);

	render();
	// stats.update();
}

function render() {
	const r = Date.now() * 0.0005;

	mesh.position.x = 700 * Math.cos(r);
	mesh.position.z = 700 * Math.sin(r);
	mesh.position.y = 700 * Math.sin(r);

	mesh.children[0].position.x = 70 * Math.cos(2 * r);
	mesh.children[0].position.z = 70 * Math.sin(r);

	if (activeCamera === cameraPerspective) {
		cameraPerspective.fov = 35 + 30 * Math.sin(0.5 * r);
		cameraPerspective.far = 1200;
		cameraPerspective.updateProjectionMatrix();

		cameraPerspectiveHelper.update();
		cameraPerspectiveHelper.visible = true;

		cameraOrthoHelper.visible = false;
	} else {
		cameraOrtho.far = mesh.position.length();
		cameraOrtho.updateProjectionMatrix();

		cameraOrthoHelper.update();
		cameraOrthoHelper.visible = true;

		cameraPerspectiveHelper.visible = false;
	}

	cameraRig.lookAt(mesh.position);

	renderer.clear();

	activeHelper.visible = false;

	renderer.setViewport(0, 150, SCREEN_WIDTH, SCREEN_HEIGHT);
	renderer.render(scene, activeCamera);

	activeHelper.visible = true;

	// 	renderer.setViewport(SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
	// 	renderer.render(scene, camera);
}
