import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingCharacter() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation and floating movement
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      
      // Mouse interaction
      const x = (state.mouse.x * state.viewport.width) / 10
      const y = (state.mouse.y * state.viewport.height) / 10
      
      meshRef.current.rotation.y += x * 0.0005
      meshRef.current.rotation.x += y * 0.0005
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="hsl(263, 100%, 65%)"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Orbiting particles */}
      <group>
        {Array.from({ length: 8 }).map((_, i) => (
          <Float key={i} speed={3 + i * 0.5} rotationIntensity={0.2}>
            <Sphere
              args={[0.05, 16, 16]}
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 2,
                Math.sin((i / 8) * Math.PI * 2) * 0.5,
                Math.sin((i / 8) * Math.PI * 2) * 2
              ]}
            >
              <meshStandardMaterial
                color="hsl(45, 100%, 70%)"
                emissive="hsl(45, 100%, 70%)"
                emissiveIntensity={0.3}
              />
            </Sphere>
          </Float>
        ))}
      </group>
    </Float>
  )
}

export function ThreeCharacter() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="hsl(263, 100%, 65%)" />
        
        <FloatingCharacter />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}