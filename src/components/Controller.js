import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, PresentationControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three";
import { useSpring, animated } from '@react-spring/three'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/controller.gltf')
  const colorMap = useLoader(TextureLoader, '/marble.jpg')


  const { scale } = useSpring({ scale: props.active ? 0.09 : 0.05 })
  const { rotationY } = useSpring({ rotationY: props.active ? 6.3 : 0 })

  const mesh = useRef()


  return (
    <group {...props} dispose={null}>
      {/* <group rotation={[-Math.PI / 16, 6.25, 6.27]}> */}
      <group rotation-y={0}>

        {/* <mesh geometry={nodes.Object_2.geometry} material={materials.phong2SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.phong2SG} /> */}


        {/* <PresentationControls
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={3} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0.2, 0]} // Default rotation
          polar={[0, Math.PI / 0.5]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        > */}
        <animated.mesh ref={mesh} geometry={nodes.Object_2.geometry} rotation-y={rotationY} scale={scale} onClick={() => props.setActive(!props.active)}>

          <meshStandardMaterial map={colorMap} roughness={0}/>
          
        </animated.mesh>


        <animated.mesh ref={mesh} geometry={nodes.Object_3.geometry} rotation-y={rotationY} onClick={() => props.setActive(!props.active)} scale={scale}>

          <meshStandardMaterial map={colorMap}  roughness={0}/>
          
        </animated.mesh>

        {/* </PresentationControls> */}

      </group>
    </group>
  )
}

useGLTF.preload('/controller.gltf')
