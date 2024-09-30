import { CameraControls, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import SphereDroplets from './components/SphereDroplets'

const Scene = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <SphereDroplets />
          <Environment
            preset='city'
            environmentIntensity={2}
            background
            backgroundBlurriness={0.2}
          />
        </Suspense>
        <CameraControls
          verticalDragToForward
          maxDistance={10}
          minDistance={1.5}
          smoothTime={0.5}
        />
      </Canvas>
    </div>
  )
}
export default Scene
