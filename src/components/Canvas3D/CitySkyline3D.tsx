import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural 3D City Skyline with glowing windows, neon rooftops, and searchlights
function SkylineScene({ mousePos }: { mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const searchlightRef1 = useRef<THREE.SpotLight>(null);
  const searchlightRef2 = useRef<THREE.SpotLight>(null);

  // Generate buildings with varied heights, widths, and neon roof antennas
  const buildings = useMemo(() => {
    const list = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 1.6 - Math.PI * 0.8;
      const radius = 18 + (i % 5) * 4;
      const x = Math.sin(angle) * radius;
      const z = -Math.cos(angle) * radius - 8;
      const height = 6 + Math.random() * 16 + (Math.abs(x) < 8 ? 6 : 0);
      const width = 1.6 + Math.random() * 2.2;
      const depth = 1.6 + Math.random() * 2.2;
      const hasNeonRoof = Math.random() > 0.4;
      const neonColor = Math.random() > 0.5 ? '#ff1f2d' : '#00d4ff';
      const antennaHeight = hasNeonRoof ? 1.5 + Math.random() * 3 : 0;

      list.push({
        id: i,
        x,
        y: height / 2 - 8,
        z,
        width,
        height,
        depth,
        hasNeonRoof,
        neonColor,
        antennaHeight
      });
    }
    return list;
  }, []);

  // Floating embers and cyber particles
  const particles = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cRed = new THREE.Color('#ff1f2d');
    const cBlue = new THREE.Color('#00d4ff');

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25 - 5;

      const c = Math.random() > 0.5 ? cRed : cBlue;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth camera parallax following cursor
      const targetX = mousePos.x * 1.5;
      const targetY = -mousePos.y * 0.8;
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.04);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.04);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePos.x * 0.08, 0.04);
    }

    // Moving city searchlights sweeping across the sky
    const time = state.clock.getElapsedTime();
    if (searchlightRef1.current) {
      searchlightRef1.current.target.position.x = Math.sin(time * 0.6) * 15;
      searchlightRef1.current.target.position.y = 18 + Math.cos(time * 0.4) * 5;
      searchlightRef1.current.target.updateMatrixWorld();
    }
    if (searchlightRef2.current) {
      searchlightRef2.current.target.position.x = Math.cos(time * 0.5) * 15;
      searchlightRef2.current.target.position.y = 16 + Math.sin(time * 0.7) * 4;
      searchlightRef2.current.target.updateMatrixWorld();
    }
  });

  return (
    <group ref={groupRef}>
      {/* Ambient and spider dual-color lighting */}
      <ambientLight intensity={0.25} color="#060e28" />
      <directionalLight position={[10, 20, 10]} intensity={0.6} color="#00d4ff" />
      <directionalLight position={[-10, 15, -10]} intensity={0.5} color="#ff1f2d" />

      {/* Spider-Man NYC Searchlights */}
      <spotLight
        ref={searchlightRef1}
        position={[-12, -7, -15]}
        angle={0.25}
        penumbra={0.9}
        intensity={3.5}
        color="#00d4ff"
        distance={45}
      />
      <spotLight
        ref={searchlightRef2}
        position={[14, -7, -12]}
        angle={0.28}
        penumbra={0.9}
        intensity={3.2}
        color="#ff1f2d"
        distance={45}
      />

      {/* Distant dimensional skyscrapers */}
      {buildings.map((b) => (
        <group key={b.id} position={[b.x, b.y, b.z]}>
          <mesh>
            <boxGeometry args={[b.width, b.height, b.depth]} />
            <meshStandardMaterial
              color="#070d1e"
              roughness={0.8}
              metalness={0.3}
              emissive="#0a1533"
              emissiveIntensity={0.25}
            />
          </mesh>

          {/* Roof neon glowing edge or antenna */}
          {b.hasNeonRoof && (
            <group position={[0, b.height / 2, 0]}>
              <mesh position={[0, b.antennaHeight / 2, 0]}>
                <cylinderGeometry args={[0.04, 0.04, b.antennaHeight, 6]} />
                <meshBasicMaterial color={b.neonColor} />
              </mesh>
              {/* Antenna tip beacon beacon light */}
              <pointLight position={[0, b.antennaHeight, 0]} color={b.neonColor} intensity={0.8} distance={6} />
            </group>
          )}
        </group>
      ))}

      {/* Atmospheric floating glowing embers & digital dust */}
      <points geometry={particles}>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export const CitySkyline3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Graceful CSS fallback if WebGL is disabled/unsupported
  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-gradient-to-b from-[#030712] via-[#060d1f] to-[#030712]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950/80 to-[#030712]" />
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#030712] via-slate-950 to-transparent" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
      >
        <fog attach="fog" args={['#030712', 15, 38]} />
        <SkylineScene mousePos={mousePos} />
      </Canvas>
      {/* Cinematic dark gradient overlay to ensure perfect contrast with text */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/50 via-transparent to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-transparent to-[#030712]/80 pointer-events-none" />
    </div>
  );
};
