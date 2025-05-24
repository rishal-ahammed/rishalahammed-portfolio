import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const geometry = useRef<THREE.IcosahedronGeometry>();
  const material = useRef<THREE.MeshPhongMaterial>();
  const mesh = useRef<THREE.Mesh>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    scene.current = new THREE.Scene();
    
    // Camera setup
    const aspect = window.innerWidth / window.innerHeight;
    camera.current = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.current.position.z = 5;

    // Renderer setup
    renderer.current = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.current.domElement);

    // Create geometry
    geometry.current = new THREE.IcosahedronGeometry(2, 1);
    material.current = new THREE.MeshPhongMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    mesh.current = new THREE.Mesh(geometry.current, material.current);
    scene.current.add(mesh.current);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.current.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(10, 10, 10);
    scene.current.add(pointLight);

    // Initial rotation
    if (mesh.current) {
      mesh.current.rotation.x = 0.5;
      mesh.current.rotation.y = 0.5;
    }

    // Animation
    const animate = () => {
      if (!mesh.current || !renderer.current || !scene.current || !camera.current) return;

      // Continuous rotation
      mesh.current.rotation.x += (targetRotation.current.x - mesh.current.rotation.x) * 0.05;
      mesh.current.rotation.y += (targetRotation.current.y - mesh.current.rotation.y) * 0.05;
      
      // Add slight automatic rotation
      mesh.current.rotation.y += 0.001;

      renderer.current.render(scene.current, camera.current);
      requestAnimationFrame(animate);
    };

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
      targetRotation.current = {
        x: mousePosition.current.y * 0.5,
        y: mousePosition.current.x * 0.5,
      };
    };

    // Handle device orientation
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta && event.gamma) {
        targetRotation.current = {
          x: (event.beta - 45) * 0.01,
          y: event.gamma * 0.01,
        };
      }
    };

    // Handle resize
    const handleResize = () => {
      if (!camera.current || !renderer.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(width, height);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (containerRef.current && renderer.current) {
        containerRef.current.removeChild(renderer.current.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('resize', handleResize);
      
      // Dispose of Three.js objects
      geometry.current?.dispose();
      material.current?.dispose();
      renderer.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    />
  );
};

export default ThreeBackground;