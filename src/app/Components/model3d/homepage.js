"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

const GLBModel = () => {
  const mountRef = useRef(null);
  const droneRef = useRef(null);
  const mixerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    mountRef.current.appendChild(labelRenderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(0, 2, 10);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(0, 10, 7.5);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load('/models/drones/scene.gltf', (gltf) => {
      gltf.scene.scale.set(3.8, 3.8, 3.8);
      scene.add(gltf.scene);
      droneRef.current = gltf.scene;

      mixerRef.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixerRef.current.clipAction(clip).play();
      });

      setLoading(false);
    }, undefined, (error) => console.error(error));

    // Initialize OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth movement
    controls.dampingFactor = 0.25; // Damping factor
    controls.enableZoom = true; // Enable zooming
    controls.zoomSpeed = 1.0; // Zoom speed
    controls.enablePan = true; // Allow panning
    controls.panSpeed = 0.5; // Panning speed
    controls.minDistance = 5; // Minimum zoom distance
    controls.maxDistance = 50; // Maximum zoom distance

    // Create labels
    const createLabel = (text, position) => {
      const div = document.createElement('div');
      div.textContent = text;
      div.style.fontSize = '30px';
      div.style.color = 'Black';
      div.style.padding = '5px';
      div.style.borderRadius = '5px';
      const label = new CSS2DObject(div);
      label.position.copy(position);
      scene.add(label);
    };

    const leftLabelPosition = new THREE.Vector3(-7, 0, 0);
    const rightLabelPosition = new THREE.Vector3(7, 0, 0);
    createLabel('Fly High', leftLabelPosition);
    createLabel('Fly Smart', rightLabelPosition);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      labelRenderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls for damping
      const deltaTime = clock.getDelta();

      if (mixerRef.current) {
        mixerRef.current.update(deltaTime);
      }

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeChild(labelRenderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: "black" }}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default GLBModel;
