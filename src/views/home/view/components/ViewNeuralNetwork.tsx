import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { AdditiveBlending, Vector3 } from 'three'
import * as THREE from "three";
interface ParticleData {
  velocity: Vector3
  numConnections: number
}

export function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.ShapeGeometry>(null)
  const linesGeometryRef = useRef<THREE.ShapeGeometry>(null)

  const maxParticleCount = 1200
  const particleCount = 600
  const r = 10
  const rHalf = r / 2
  const maxConnections = 20
  const minDistance = 2.5
  let vertexpos = 0
  let colorpos = 0
  let numConnected = 0

  const segments = maxParticleCount * maxParticleCount
  const positions = useMemo(() => new Float32Array(segments * 3), [segments])
  const colors = useMemo(() => new Float32Array(segments * 3), [segments])

  const particlePositions = useMemo(() => new Float32Array(maxParticleCount * 3), [])

  const particlesData = useMemo<ParticleData[]>(() => [], [])

  const v = useMemo(() => new Vector3(), [])

  useEffect(() => {
    for (let i = 0; i < maxParticleCount; i++) {
      const x = Math.random() * r - r / 2
      const y = Math.random() * r - r / 2
      const z = Math.random() * r - r / 2

      particlePositions[i * 3] = x
      particlePositions[i * 3 + 1] = y
      particlePositions[i * 3 + 2] = z

      const velocity = new Vector3(
        -1 + Math.random() * 2,
        -1 + Math.random() * 2,
        -1 + Math.random() * 2
      ).normalize().divideScalar(50)

      particlesData.push({ velocity, numConnections: 0 })
    }

    if (particlesRef.current) {
      particlesRef.current.setDrawRange(0, particleCount)
    }
  }, [maxParticleCount, particleCount, particlePositions, particlesData, r])

  useFrame((_, delta) => {
    vertexpos = 0
    colorpos = 0
    numConnected = 0

    for (let i = 0; i < particleCount; i++) {
      particlesData[i].numConnections = 0
    }

    for (let i = 0; i < particleCount; i++) {
      const particleData = particlesData[i]

      v.set(
        particlePositions[i * 3],
        particlePositions[i * 3 + 1],
        particlePositions[i * 3 + 2]
      )
        .add(particleData.velocity)
        .setLength(10)
      particlePositions[i * 3] = v.x
      particlePositions[i * 3 + 1] = v.y
      particlePositions[i * 3 + 2] = v.z

      if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf)
        particleData.velocity.y = -particleData.velocity.y

      if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
        particleData.velocity.x = -particleData.velocity.x

      if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf)
        particleData.velocity.z = -particleData.velocity.z

      if (particleData.numConnections >= maxConnections) continue

      for (let j = i + 1; j < particleCount; j++) {
        const particleDataB = particlesData[j]
        if (particleDataB.numConnections >= maxConnections) continue

        const dx = particlePositions[i * 3] - particlePositions[j * 3]
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1]
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < minDistance) {
          particleData.numConnections++
          particleDataB.numConnections++

          const alpha = 1.0 - dist / minDistance

          positions[vertexpos++] = particlePositions[i * 3]
          positions[vertexpos++] = particlePositions[i * 3 + 1]
          positions[vertexpos++] = particlePositions[i * 3 + 2]

          positions[vertexpos++] = particlePositions[j * 3]
          positions[vertexpos++] = particlePositions[j * 3 + 1]
          positions[vertexpos++] = particlePositions[j * 3 + 2]

          colors[colorpos++] = alpha
          colors[colorpos++] = alpha
          colors[colorpos++] = alpha

          colors[colorpos++] = alpha
          colors[colorpos++] = alpha
          colors[colorpos++] = alpha

          numConnected++
        }
      }
    }

    if (linesGeometryRef.current) {
      linesGeometryRef.current.setDrawRange(0, numConnected * 2);
      linesGeometryRef.current.attributes.position.needsUpdate = true; // This must be done after setting the positions
      linesGeometryRef.current.attributes.color.needsUpdate = true; // Ensure the color attribute is marked for update
    }

    if (particlesRef.current) {
      particlesRef.current.attributes.position.needsUpdate = true
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += delta / 5
    }
  })

  return (
    <group ref={groupRef} dispose={null}>
      <points>
        <bufferGeometry ref={particlesRef}>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={'white'}
          size={3}
          blending={AdditiveBlending}
          transparent={true}
          sizeAttenuation={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry ref={linesGeometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors={true}
          blending={AdditiveBlending}
          transparent={true}
        />
      </lineSegments>
    </group>
  )
}

export function ViewNeuralNetwork() {
  return (
    <Canvas camera={{ position: [0, 0, 17.5] }} >
      <NeuralNetwork />
      <OrbitControls />
    </Canvas>
  )
}

