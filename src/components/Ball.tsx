"use client"
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
} from "@react-three/drei";
import dynamic from "next/dynamic";
const Ball = dynamic(() => import('@/components/OneBall'), {
    loading: () => null,
    ssr:false
  },)

const BallCanvas = ({ icon }:{ icon:string }) => {
  
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
