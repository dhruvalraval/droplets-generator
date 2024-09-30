import { useRef, useState } from 'react'
import { DoubleSide, Quaternion, Vector3 } from 'three'
import Droplet from './Droplet'

const SphereDroplets = () => {
  const meshRef = useRef()
  const [drops, setDrops] = useState([])

  const handleClick = (event) => {
    if (meshRef.current) {
      const { point, face } = event
      const normal = face?.normal || new Vector3(0, 1, 0)
      const rotation = new Quaternion()
      const up = new Vector3(0, 1, 0)
      rotation.setFromUnitVectors(up, normal)
      setDrops((drops) => [
        ...drops,
        {
          pos: point,
          rot: rotation,
          scale: Math.max(0.08, Math.random() * 0.2),
        },
      ])
    }
  }

  return (
    <group>
      <mesh
        ref={meshRef}
        onClick={handleClick}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color='lightblue'
          transparent={true}
          roughness={0.2}
          transmission={0.8}
          ior={1.55}
          side={DoubleSide}
        />
      </mesh>
      {drops.map((drop, index) => (
        <Droplet
          key={index}
          position={drop.pos}
          scale={drop.scale}
          rotation={drop.rot}
        />
      ))}
    </group>
  )
}
export default SphereDroplets
