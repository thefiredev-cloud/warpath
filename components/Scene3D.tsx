'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function RadarSweep() {
  const sweepRef = useRef<THREE.Mesh>(null)
  const blipsRef = useRef<THREE.Points>(null)
  const timeRef = useRef(0)

  const blipPositions = useMemo(() => {
    const positions = new Float32Array(60 * 3)
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = Math.random() * 2.2
      positions[i * 3] = Math.cos(angle) * r
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = Math.sin(angle) * r
    }
    return positions
  }, [])

  const blipColors = useMemo(() => {
    const colors = new Float32Array(60 * 3)
    for (let i = 0; i < 60; i++) {
      colors[i * 3] = 0.86
      colors[i * 3 + 1] = 0.14
      colors[i * 3 + 2] = 0.14
    }
    return colors
  }, [])

  useFrame((_, delta) => {
    if (sweepRef.current) {
      sweepRef.current.rotation.y += delta * 0.8
    }
    timeRef.current += delta
    if (blipsRef.current) {
      const geo = blipsRef.current.geometry
      const cols = geo.attributes.color.array as Float32Array
      const sweepAngle = (timeRef.current * 0.8) % (Math.PI * 2)
      const positions = geo.attributes.position.array as Float32Array
      for (let i = 0; i < 60; i++) {
        const x = positions[i * 3]
        const z = positions[i * 3 + 2]
        const blipAngle = Math.atan2(z, x)
        const diff = ((blipAngle - sweepAngle + Math.PI * 2) % (Math.PI * 2))
        const brightness = diff < 0.4 ? 1.0 : Math.max(0.1, 1.0 - diff * 0.5)
        cols[i * 3] = 0.86 * brightness
        cols[i * 3 + 1] = 0.14 * brightness
        cols[i * 3 + 2] = 0.14 * brightness
      }
      geo.attributes.color.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Radar ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.4, 2.5, 64]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 1.65, 64]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 0.82, 64]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.2} />
      </mesh>
      {/* Crosshairs */}
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={2} array={new Float32Array([-2.5,0,0,2.5,0,0])} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#dc2626" transparent opacity={0.2} />
      </line>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={2} array={new Float32Array([0,0,-2.5,0,0,2.5])} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#dc2626" transparent opacity={0.2} />
      </line>
      {/* Sweep */}
      <mesh ref={sweepRef} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 64, 0, Math.PI / 6]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      {/* Blips */}
      <points ref={blipsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={60} array={blipPositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={60} array={blipColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.08} vertexColors sizeAttenuation />
      </points>
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 5, 0]} color="#dc2626" intensity={2} />
        <RadarSweep />
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
