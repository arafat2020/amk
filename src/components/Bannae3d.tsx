"use client"
import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import ComputersCanvas from './Computer';
import { motion } from "framer-motion-3d";

function Bannae3d() {
  const ref = useRef<THREE.PointLight>()
useEffect(()=>{
  if (ref.current !== undefined) {
    const tl = gsap.timeline()
    tl.to(ref.current.position, { x: -30.3, y: -20,z:-5, duration: .8 })
    
  }
},[])
  return (

    <div
      className='w-screen h-[500px] relative'>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight color={"blue"} intensity={4} />
        < motion.pointLight 
        initial={{
          x:0,
          y:0,
          z:0
        }}
        animate={{
          x: -30.3, y: -20,z:-5
        }}
        transition={{
          duration:.7
        }}
        color={0xf76871} intensity={.5} />
        <ComputersCanvas />
        <PerspectiveCamera  makeDefault position={[20, 0, 5]} fov={25} />

        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>

  )
}

export default Bannae3d