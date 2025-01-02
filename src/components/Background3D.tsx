import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Add ambient light with increased intensity
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Add stronger directional light
    const directionalLight = new THREE.DirectionalLight(0x6366f1, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create more particles with larger size
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000; // Doubled particle count
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10; // Increased spread
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02, // Increased size
      color: 0x6366f1,
      transparent: true,
      opacity: 0.9, // Increased opacity
      blending: THREE.AdditiveBlending, // Add glow effect
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add a second particle system with different properties
    const particles2Geometry = new THREE.BufferGeometry();
    const particles2Count = 1000;
    const pos2Array = new Float32Array(particles2Count * 3);

    for (let i = 0; i < particles2Count * 3; i++) {
      pos2Array[i] = (Math.random() - 0.5) * 8;
    }

    particles2Geometry.setAttribute('position', new THREE.BufferAttribute(pos2Array, 3));

    const particles2Material = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x4338ca, // Different color for variety
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles2Mesh = new THREE.Points(particles2Geometry, particles2Material);
    scene.add(particles2Mesh);

    // Position camera slightly further back
    camera.position.z = 4;

    // Animation with more movement
    const animate = () => {
      requestAnimationFrame(animate);
      
      // First particle system rotation
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
      
      // Second particle system opposite rotation
      particles2Mesh.rotation.x -= 0.0015;
      particles2Mesh.rotation.y -= 0.0015;

      // Add subtle wave motion
      particlesMesh.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      particles2Mesh.position.y = Math.cos(Date.now() * 0.001) * 0.1;

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(particlesMesh);
      scene.remove(particles2Mesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particles2Geometry.dispose();
      particles2Material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
        opacity: 0.9 // Slightly increased background opacity
      }}
    />
  );
};