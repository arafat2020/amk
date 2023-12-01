"use client"
import Nav from "@/components/Nav";
import { Fragment } from "react";
import dynamic from 'next/dynamic'
import BannerContent from "@/components/BannerContent";
import Loader from "@/components/Loader";
const Bannae3d = dynamic(() => import('@/components/Bannae3d'), {
  loading: () => <Loader />,
  ssr:false
},)

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <div className="w-screen relative ">
        <BannerContent />
        <div className="w-full h-[500px] ">
          <Bannae3d />
        </div>
      </div>
    </Fragment>

  )
}
