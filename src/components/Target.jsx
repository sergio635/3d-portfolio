import React from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react' // ✅ 1. Import que faltaba

const Target = (props) => {
  const targetRef = React.useRef()

  const { scene } = useGLTF('/models/Target.glb')

  useGSAP(() => {
    if (!targetRef.current) return
    gsap.to(targetRef.current.position, { // ✅ 2. "targetREf" → "targetRef"
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  }, {scope: targetRef}) // ✅ 3. Agregado "scope" para asegurar que la animación se aplique al elemento correcto

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  )
}



export default Target