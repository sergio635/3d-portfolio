import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import RoboticHorse from '../components/RoboticHorse'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import { calculateSizes } from '../constants/index'

const Hero = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isSmall = useMediaQuery({ maxWidth: 480 })
  const isTablet = useMediaQuery({ maxWidth: 1024 })

  const sizes = calculateSizes(isMobile, isSmall, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
          Hi, I'm Sergio <span className='wocket'>🚀</span>
        </p>
        <p className='hero_tag text-gray_gradient text-center'>
          Building Products and Brands
        </p>
      </div>

      <div className='w-full h-screen absolute inset-0'>
       
        <Canvas className='w-full h-full'>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} near={0.01} far={1000} />

          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1.8} color="#FFF5E0" />
          <pointLight position={[-4, 3, 4]} intensity={0.8} color="#B87333" />

          <Suspense fallback={<CanvasLoader />}>
            <RoboticHorse
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[3.1, 3.7, 3 ]}
              //scale={[controls.scale, controls.scale, controls.scale]}
              
              //rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
              //position={[controls.positionX, controls.positionY - 12 , controls.positionZ]}
            />
              <group>
              <Target position={sizes.targetPosition}/>
            </group>
            
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} color="#FFF5E0" />
          </Suspense>

          <OrbitControls enableZoom={false}  />
        </Canvas>
      </div>
    </section>
  )
}

export default Hero