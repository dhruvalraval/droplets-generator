import { MeshTransmissionMaterial } from '@react-three/drei'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Droplet = ({ position, rotation, scale }) => {
  const { nodes, materials } = useGLTF('/models/drop.glb')

  return (
    <group
      position={position}
      scale={scale}
      dispose={null}
    >
      <group name='Scene'>
        <mesh
          name='Sphere001'
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          position={[0, 0, 0]}
          quaternion={rotation}
          scale={0.1}
        >
          <meshPhysicalMaterial
            color='white'
            transparent={true}
            roughness={0}
            transmission={1}
            iridescence={1}
            iridescenceIOR={1.33}
            ior={1.33}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            reflectivity={0.4}
          />
        </mesh>
      </group>
    </group>
  )
}

export default Droplet

useGLTF.preload('/models/drop.glb')
