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

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xF2FCE2, 2); // Soft green ambient light
    scene.add(ambientLight);

    // Add directional light with subtle green tint
    const directionalLight = new THREE.DirectionalLight(0xF2FCE2, 2);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create particles with subtle green color
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xF2FCE2, // Soft green color
      transparent: true,
      opacity: 0.4, // More subtle opacity
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Second particle system with even more subtle properties
    const particles2Geometry = new THREE.BufferGeometry();
    const particles2Count = 1500;
    const pos2Array = new Float32Array(particles2Count * 3);

    for (let i = 0; i < particles2Count * 3; i++) {
      pos2Array[i] = (Math.random() - 0.5) * 8;
    }

    particles2Geometry.setAttribute('position', new THREE.BufferAttribute(pos2Array, 3));

    const particles2Material = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xF2FCE2, // Matching soft green
      transparent: true,
      opacity: 0.3, // Even more subtle
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles2Mesh = new THREE.Points(particles2Geometry, particles2Material);
    scene.add(particles2Mesh);

    // Position camera closer to bring particles to forefront
    camera.position.z = 3;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Gentle rotation for first particle system
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      // Subtle opposite rotation for second system
      particles2Mesh.rotation.x -= 0.0007;
      particles2Mesh.rotation.y -= 0.0007;

      // Very subtle wave motion
      particlesMesh.position.y = Math.sin(Date.now() * 0.0005) * 0.2;
      particles2Mesh.position.y = Math.cos(Date.now() * 0.0005) * 0.2;

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
        opacity: 0.95 // Slightly transparent to blend with background
      }}
    />
  );
};