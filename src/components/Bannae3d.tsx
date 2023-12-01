"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Model from './Scene';

function Bannae3d() {
  
  return (
   
      <div
      className='w-screen h-[500px] relative '>
        <Canvas>
          <ambientLight color={"blue"} intensity={10} />
          <pointLight color={0xf76871} position={[-30.3, -20, -5]} intensity={.5} />
          <Model />
          <PerspectiveCamera makeDefault position={[0, 5, 10]} />

          <OrbitControls />
        </Canvas>
      </div>
 
  )
}

export default Bannae3d