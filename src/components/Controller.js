import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, PresentationControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
import { useSpring, animated } from '@react-spring/three'

export default function Model(props) {

  const [windowSize, setWindowSize] = useState([])
  let { scale } = useSpring({ scale: (props.active && windowSize[1] > 770) ? 0.09 : 0.05 })


  useEffect(() => {
    setWindowSize(current => [...current, window.innerHeight, window.innerWidth])
    
  },[])


  const { nodes, materials } = useGLTF('/controller.gltf')
  const colorMap = useLoader(TextureLoader, '/marble.jpg')


  const { rotationY } = useSpring({ rotationY: props.active ? 6.3 : 0 })

  const mesh = useRef()


  return (
    <group {...props} dispose={null}>
      {/* <group rotation={[-Math.PI / 16, 6.25, 6.27]}> */}
      <group rotation-y={0}>

        {/* <mesh geometry={nodes.Object_2.geometry} material={materials.phong2SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.phong2SG} /> */}

        <animated.mesh ref={mesh} geometry={nodes.Object_2.geometry} rotation-y={rotationY} scale={scale} onClick={() => props.setActive(!props.active)}>

          <meshStandardMaterial map={colorMap} roughness={0}/>
          
        </animated.mesh>


        <animated.mesh ref={mesh} geometry={nodes.Object_3.geometry} rotation-y={rotationY} onClick={() => props.setActive(!props.active)} scale={scale}>

          <meshStandardMaterial map={colorMap}  roughness={0}/>
          
        </animated.mesh>



      </group>
    </group>
  )
}

useGLTF.preload('/controller.gltf')
