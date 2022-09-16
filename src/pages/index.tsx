import Header from "@/components/dom/Header";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Sky, Text } from '@react-three/drei'
import Controller from '../components/Controller'
import { useState, useEffect } from 'react'
import { BiHomeHeart } from 'react-icons/bi'
import Review from '@/components/Review'
import Link from "next/link";
import Image from 'next/image'
import nathan from '@/assets/images/Nathan.jpg'
import nox from '@/assets/images/Cheyone.jpg'
import bryce from '@/assets/images/Bryce.jpg'
import austin from '@/assets/images/Austin.jpg'


// const Box = dynamic(() => import("@/components/canvas/Box"), {
//   ssr: false,
// });


// DOM elements here
const DOM = ({active, toggleModal}) => {
  return (
    <div>
      <nav>
        {active || (toggleModal > 0) ? '' : <span>FAQ</span>}
        {active || (toggleModal > 0) ? '' : <span>Contact</span>}
        {active || (toggleModal > 0) ? '' : <BiHomeHeart className="home"/>}
        {active || (toggleModal > 0) ? '' : <Link href='/shop'><span>Shop</span></Link>}
        {active || (toggleModal > 0) ? '' : <span>Reviews</span>}
      </nav>

      <div className="button-container">
        {active ? <Link href='/shop'><button>Buy Now</button></Link> : ''}
      </div>
    </div>
  )
};

const DOM2 = () => {
  return <div style={{display: 'none'}}></div>
};


const Footer = ({active, toggleModal, setToggleModal}) => {


  return (
    <div className="footer-container">

      {active || (toggleModal > 0) ? '' : <footer>
        <Review tag={1} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'Nathan'} img={nathan}/>
        <Review tag={2} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'Cheyone'} img={nox}/>
        <Review tag={3} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'Austin'} img={austin}/>
        <Review tag={4} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'Bryce'} img={bryce}/>
      </footer>}

    </div>
  )
}

const Modal = (props) => {

  const [selectedReview, setSelectedReview] = useState({
    name: '',
    review: '',
    img: nathan
  })

  useEffect(() => {
    if (props.toggleModal == 1) {
      setSelectedReview({
        name: 'Nathan',
        review: 'dude wtf this controller you gave me has free dash back out of crouch',
        img: nathan
      })
    } else if (props.toggleModal == 2) {
      setSelectedReview({
        name: 'Cheyone',
        review: 'Controller DANK. Tactile Z is based',
        img: nox
      })
    } else if (props.toggleModal == 3) {
      setSelectedReview({
        name: 'Austin',
        review: 'Thank you chobgod',
        img: austin
      })
    } else if (props.toggleModal == 4) {
      setSelectedReview({
        name: 'Bryce',
        review: 'I got a PR level win on the phob',
        img: bryce
      })
    }

  },[])

  return (

    <div className="modal-background">
      <div className="modal">
        <div className="modal-info">
          <div className="modal-image-wrapper">
            <Image src={selectedReview.img} style={{borderRadius: '50%'}}/>
          </div>
          <h2>{selectedReview.name}</h2>
          <p>{selectedReview.review}</p>
          <span>⭐⭐⭐⭐⭐</span>
        </div>

        <button id='modal-button' onClick={() => props.setToggleModal(0)}>Close</button>
         
      </div>
    </div>
  )
}

//canvas
const R3F = ({active, setActive, textDisabled, setTextDisabled, toggleModal}) => {

  

  return (
    <>
      <Sky distance={450000} sunPosition={[0, 1, 1]} inclination={0} azimuth={0.25} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        {textDisabled ? '' : <Text anchorY='bottom' anchorX='center' scale={[1.5, 1.5, 1.5]} color='white' position={[0, 0.8, 1]}>Click or Drag!</Text>}
        {toggleModal > 0 ? '' : <Controller active={active} setActive={setActive} />}
        
    </>
  );
};

const R3F2 = () => {

  return (
    <>
    </>
  );
};

export default function Page() {

  const [active, setActive] = useState(false)
  const [toggleModal, setToggleModal] = useState(0)
  const [textDisabled, setTextDisabled] = useState(false)


  return (
    <>
      <DOM active={active} toggleModal={toggleModal}/>
      <R3F active={active} setActive={setActive} textDisabled={textDisabled} setTextDisabled={setTextDisabled} toggleModal={toggleModal}/>
      <Footer toggleModal={toggleModal} setToggleModal={setToggleModal} active={active}/>
      <R3F2 />
      {toggleModal != 0 ? <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} /> : <DOM2 />}
      
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Welcome!",
    },
  };
}
