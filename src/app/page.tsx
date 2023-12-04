"use client"
import Nav from "@/components/Nav";
import { Fragment } from "react";
import dynamic from 'next/dynamic'
import BannerContent from "@/components/BannerContent";
import Loader from "@/components/Loader";
import Introduce from "@/components/Introduce";
import Contact from "@/components/Contact";
const Bannae3d = dynamic(() => import('@/components/Bannae3d'), {
  loading: () => <Loader />,
  ssr: false
},)
const Tech = dynamic(() => import('@/components/Tech'), {
  loading: () => <Loader />,
  ssr: false
},)

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <div className="w-screen relative">
        <BannerContent />
        <div className="w-full h-[500px] ">
          <Bannae3d />
        </div>
        <Introduce />
        <Tech />
        <div className="w-full flex justify-around items-center py-4">
          <div className="">
            <h2 className="pop text-4xl pop font-bold text-slate-100">Contect Me</h2>
          </div>
        </div>
        <Contact />
      </div>
    </Fragment>

  )
}
