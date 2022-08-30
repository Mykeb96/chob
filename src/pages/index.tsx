import Header from "@/components/dom/Header";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Sky, Text } from '@react-three/drei'
import Controller from '../components/Controller'
import { useState, useEffect } from 'react'
import { BiHomeHeart } from 'react-icons/bi'
import Review from '@/components/Review'

// const Box = dynamic(() => import("@/components/canvas/Box"), {
//   ssr: false,
// });


// DOM elements here
const DOM = ({active}) => {
  return (
    <div>
      <nav>
        {active ? '' : <span>FAQ</span>}
        {active ? '' : <span>Contact</span>}
        {active ? '' : <BiHomeHeart className="home"/>}
        {active ? '' : <span>Shop</span>}
        {active ? '' : <span>Reviews</span>}
      </nav>

      <div className="button-container">
        {active ? <button>Buy Now</button> : ''}
      </div>
    </div>
  )
};


const Footer = ({active}) => {


  return (
    <div className="footer-container">

      {active ? '' : <footer>
        <Review name={'jerry'}/>
        <Review name={'jerry'}/>
        <Review name={'jerry'}/>
        <Review name={'jerry'}/>
      </footer>}

      {/* <footer>
        <Review name={'jerry'}/>
        <Review name={'jerry'}/>
        <Review name={'jerry'}/>
        <Review name={'jerry'}/>
      </footer> */}
    </div>
  )
}

//canvas
const R3F = ({active, setActive}) => {

  return (
    <>
      <Sky distance={450000} sunPosition={[0, 1, 1]} inclination={0} azimuth={0.25} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Controller active={active} setActive={setActive} />
    </>
  );
};

export default function Page() {

  useEffect(() => {
    // console.log(window.innerHeight, window.innerWidth)
})

  // const {innerWidth, innerHeight} = window;
  // console.log(window)

  const [active, setActive] = useState(false)

  return (
    <>
      <DOM active={active}/>
      <R3F active={active} setActive={setActive}/>
      <Footer active={active}/>
      
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       title: "Welcome!",
//     },
//   };
// }
