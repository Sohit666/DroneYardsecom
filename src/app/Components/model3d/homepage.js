// components/GLBModel.js

"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLBModel = () => {
  const mountRef = useRef(null);
  const droneRef = useRef(null);
  const mixerRef = useRef(null); // Reference for AnimationMixer
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(0, 9, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Adjust based on your model size

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(0, 10, 7.5);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load('/models/drones/scene.gltf', (gltf) => {
      gltf.scene.scale.set(3.8, 3.8, 3.8); // Increased scaling factor
      scene.add(gltf.scene);
      droneRef.current = gltf.scene;

      // Set up AnimationMixer
      mixerRef.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        mixerRef.current.clipAction(clip).play(); // Play each animation clip
      });

      setLoading(false);
    }, undefined, (error) => console.error(error));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Initialize a clock to keep track of time
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Calculate the time delta since the last frame
      const deltaTime = clock.getDelta(); // Get the time since the last frame

      // Update the mixer for animations
      if (mixerRef.current) {
        mixerRef.current.update(deltaTime); // Update animation based on deltaTime
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
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
