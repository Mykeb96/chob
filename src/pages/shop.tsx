import Link from "next/link";
import { BiHomeHeart } from 'react-icons/bi'
import { Stars, Sky } from '@react-three/drei'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'



// dom components goes here
const DOM = () => {
  return (
    <>
    <div className="shop-buttons">
    <Link href='/shop/new'><button className="shop-button1" id="s_button">New</button></Link>
    <Link href='/shop/modify'><button className="shop-button2" id="s_button">Modify</button></Link>
    </div>
    </>
  )
}
// canvas components goes here
const R3Fshop = ({ r3f = true }) => {
  return (
    <>
        <Sky distance={450000} sunPosition={[0, 1, 1]} inclination={0} azimuth={0.25}/>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}
// The page component that gets "split up" by the `_app.js` file above
const Page = () => {
  return (
    <>
      <DOM />
      <R3Fshop r3f />
    </>
  )
}
export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Shop',
    },
  }
}