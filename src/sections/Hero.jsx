import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import RoboticHorse from '../components/RoboticHorse'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import { calculateSizes } from '../constants/index'

 

const Hero = () => {

   const controls = useControls({
    // Rotación
    rotationX: { value: 0.1, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: -0.6, min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    // Escala
    scale: { value: 1.8, min: 0.1, max: 10, step: 0.1 },
    // Posición
    positionX: { value: 2, min: -20, max: 20, step: 0.1 },
    positionY: { value: -2.5, min: -20, max: 20, step: 0.1 },
    positionZ: { value: 0, min: -20, max: 20, step: 0.1 },
  })

  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isSmall = useMediaQuery({ maxWidth: 480 })
  const isTablet = useMediaQuery({ maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

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
       <Leva></Leva>
        <Canvas className='w-full h-full'>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} near={0.01} far={1000} />

          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1.8} color="#FFF5E0" />
          <pointLight position={[-4, 3, 4]} intensity={0.8} color="#B87333" />

          <Suspense fallback={<CanvasLoader />}>
            <RoboticHorse
              //scale={sizes.deskScale}
              //position={sizes.deskPosition}
              //rotation={[0, -0.6, 0 ]}
              scale={controls.scale}
              position={[controls.positionX, controls.positionY, controls.positionZ]}
              rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
            />
              <group>
              <Target position={sizes.targetPosition}/>
            </group>
            
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} color="#FFF5E0" />
          </Suspense>

        </Canvas>
      </div>
    </section>
  )
}

export default Hero