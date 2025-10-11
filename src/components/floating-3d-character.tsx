import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function FloatingCharacter() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

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
    <group ref={groupRef}>
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
    </group>
  )
}

export function FloatingThreeCharacter() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Animate character through sections on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          if (containerRef.current) {
            // Move character position based on scroll progress
            const progress = self.progress
            const translateY = progress * window.innerHeight * 0.5
            const scale = 1 + progress * 0.3
            const rotation = progress * 360
            
            gsap.set(containerRef.current, {
              y: translateY,
              scale: scale,
              rotation: rotation,
              opacity: 1 - progress * 0.3
            })
          }
        }
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed top-20 right-8 w-32 h-32 z-30 pointer-events-none opacity-80"
    >
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