
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

/* Define local component aliases for Three.js elements to resolve JSX intrinsic element errors */
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const SphereGeometry = 'sphereGeometry' as any;
const BoxGeometry = 'boxGeometry' as any;
const TorusGeometry = 'torusGeometry' as any;
const MeshStandardMaterialTag = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const SpotLight = 'spotLight' as any;
const PointLight = 'pointLight' as any;

const FloatingElements = () => {
  const group = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = Math.cos(t / 4) / 8;
      group.current.rotation.y = Math.sin(t / 4) / 8;
      group.current.position.y = Math.sin(t / 1.5) / 10;
    }
    
    // Manual "distort" and "wobble" effects using scale and rotation
    if (sphereRef.current) {
      const s = 1 + Math.sin(t * 2) * 0.05;
      sphereRef.current.scale.set(s, s, s);
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.z = Math.sin(t) * 0.2;
      cubeRef.current.rotation.x = Math.cos(t * 0.5) * 0.2;
    }
  });

  return (
    <Group ref={group}>
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Mesh ref={sphereRef} position={[-4, 2, -5]}>
          <SphereGeometry args={[1.5, 64, 64]} />
          <MeshStandardMaterialTag
            color="#3b82f6"
            roughness={0.05}
            metalness={0.2}
            transparent
            opacity={0.4}
          />
        </Mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Mesh ref={cubeRef} position={[5, -2, -8]}>
          <BoxGeometry args={[2, 2, 2]} />
          <MeshStandardMaterialTag
            color="#10b981"
            roughness={0.1}
            metalness={0.3}
            transparent
            opacity={0.3}
          />
        </Mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Mesh position={[0, -4, -10]}>
          <TorusGeometry args={[3, 0.5, 32, 100]} />
          <MeshStandardMaterialTag
            color="#000000"
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.08}
          />
        </Mesh>
      </Float>
    </Group>
  );
};

const FloatingScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <AmbientLight intensity={1.5} />
        <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <PointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        
        <FloatingElements />
        
        <Environment preset="studio" />
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2.5} far={4.5} opacity={0.2} />
      </Canvas>
    </div>
  );
};

export default FloatingScene;
