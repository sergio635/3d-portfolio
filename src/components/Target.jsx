import React from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'

const Target = (props) => {
const targetRef = React.useRef()

const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

  useGSAP(() => {
    gsap.to(targetREf.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <mesh {...props}  ref={targetRef}>
        <primitive object={scene}></primitive>
    </mesh>
  )
}

export default Target
