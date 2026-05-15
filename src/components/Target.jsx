import React from 'react'
import { useGLTF, Float } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react' // ✅ 1. Import que faltaba

const Target = (props) => {
  const targetRef = React.useRef()

  const { scene } = useGLTF('/models/Target.glb')

  useGSAP(() => {
    if (!targetRef.current) return
    gsap.to(targetRef.current.position, { // ✅ 2. "targetREf" → "targetRef"
      y: targetRef.current.position.y ,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
    })
  }, {scope: targetRef}) // ✅ 3. Agregado "scope" para asegurar que la animación se aplique al elemento correcto

  return (
    <Float floatIntensity={1}>
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={3}>
      <primitive object={scene} />
    </mesh>
    </Float>
  )
}

export default Target

// ✅ Agrega esta línea al final
useGLTF.preload('/models/Target.glb')