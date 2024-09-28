// components/GLBModel.js

"use client";
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLBModel = () => {
  const mountRef = useRef(null);
  const droneRef = useRef(null);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Create a Three.JS scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1000); // Adjusted FOV
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Adjust camera position
    camera.position.set(0, 2, 10); // Adjust as needed

    // Add lighting to the scene
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    // Instantiate the loader for the .gltf file
    const loader = new GLTFLoader();

    loader.load(
      `/models/scene.gltf`, // Adjust the path accordingly
      (gltf) => {
        gltf.scene.scale.set(0.05, 0.05, 0.05); // Adjust scale for better fit
        scene.add(gltf.scene);
        droneRef.current = gltf.scene; // Store reference to the drone model
        setLoading(false); // Set loading to false when model is loaded
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error(error);
      }
    );

    // Add OrbitControls to the camera
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth damping for camera controls
    controls.dampingFactor = 1; // Damping factor
    controls.enableZoom = true; // Enable zooming
    controls.maxDistance = 100; // Maximum distance for zooming out
    controls.minDistance = 13;  // Minimum distance for zooming in

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      // Remove the event listener and the renderer
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {loading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default GLBModel;
