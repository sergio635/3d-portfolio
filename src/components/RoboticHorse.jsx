import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'


const RoboticHorse = (props) => {
 
  const { nodes } = useGLTF('/models/RoboticHorse/scene-transformed.glb')



  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube003_Red_shiny_tiles_0.geometry}
        position={[0, 0.709, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.327, 0.477, 0.477]}
      >
        <meshStandardMaterial color="#B87333" metalness={0.8} roughness={0.3} />
      </mesh>

      <mesh
        geometry={nodes.Cube003_Touched_Plastic_Rough_0.geometry}
        position={[0, 0.709, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.327, 0.477, 0.477]}
      >
        <meshStandardMaterial color="#4A7C6F" metalness={0.4} roughness={0.6} />
      </mesh>

      <mesh
        geometry={nodes.Cube003_Material001_0.geometry}
        position={[0, 0.709, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.327, 0.477, 0.477]}
      >
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.7}
          roughness={0.2}
          emissive="#FFD700"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/RoboticHorse/scene-transformed.glb')
export default RoboticHorse