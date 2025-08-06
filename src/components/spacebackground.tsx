"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SpaceBackgroundProps {
    rotationFactor: number;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ rotationFactor }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scene, camera, and renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Star creation
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.02,
            blending: THREE.AdditiveBlending,
            transparent: true,
        });

        const starVertices = [];
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = -Math.random() * 100;
            starVertices.push(x, y, z);
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Galaxy creation (optional, for a more complex background)
        const galaxyGeometry = new THREE.SphereGeometry(5, 32, 32);
        const galaxyMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            side: THREE.BackSide
        });
        const galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
        scene.add(galaxy);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate stars based on rotationFactor
            stars.rotation.y = rotationFactor * 0.01;
            galaxy.rotation.y = rotationFactor * 0.005;

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            starsGeometry.dispose();
            starsMaterial.dispose();
            galaxyGeometry.dispose();
            galaxyMaterial.dispose();
        };
    }, [rotationFactor]);

    return <div ref={mountRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />;
};

const Component = () => <div className="fixed w-screen h-screen z-[-999]">
    <SpaceBackground rotationFactor={0} />
</div>

export default Component;