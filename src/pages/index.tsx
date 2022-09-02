import Header from "@/components/dom/Header";
import dynamic from "next/dynamic";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Sky, Text, Center, Text3D } from '@react-three/drei'
import Controller from '../components/Controller'
import { useState, useEffect } from 'react'
import { BiHomeHeart } from 'react-icons/bi'
import Review from '@/components/Review'

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
        {active || (toggleModal > 0) ? '' : <span>Shop</span>}
        {active || (toggleModal > 0) ? '' : <span>Reviews</span>}
      </nav>

      <div className="button-container">
        {active ? <button>Buy Now</button> : ''}
      </div>
    </div>
  )
};

const DOM2 = () => {
  return <div></div>
};


const Footer = ({active, toggleModal, setToggleModal}) => {


  return (
    <div className="footer-container">

      {active || (toggleModal > 0) ? '' : <footer>
        <Review tag={1} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'jerry'}/>
        <Review tag={2} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'jerry'}/>
        <Review tag={3} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'jerry'}/>
        <Review tag={4} toggleModal={toggleModal} setToggleModal={setToggleModal} name={'jerry'}/>
      </footer>}

    </div>
  )
}

const Modal = (props) => {

  const [selectedReview, setSelectedReview] = useState({
    name: '',
    review: '',
    img: ''
  })

  useEffect(() => {
    if (props.toggleModal == 1) {
      setSelectedReview({
        name: 'Nathan',
        review: 'dude wtf this controller you gave me has free dash back out of crouch',
        img: ''
      })
    } else if (props.toggleModal == 2) {
      setSelectedReview({
        name: 'Nathan',
        review: 'dude wtf this controller you gave me has free dash back out of crouch',
        img: ''
      })
    } else if (props.toggleModal == 3) {
      setSelectedReview({
        name: 'Nathan',
        review: 'dude wtf this controller you gave me has free dash back out of crouch',
        img: ''
      })
    } else if (props.toggleModal == 4) {
      setSelectedReview({
        name: 'Nathan',
        review: 'dude wtf this controller you gave me has free dash back out of crouch',
        img: ''
      })
    }

  },[])

  return (

    <div className="modal-background">
      <div className="modal">
        <div className="modal-info">
          <img />
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
const R3F = ({active, setActive}) => {

  return (
    <>
      <Sky distance={450000} sunPosition={[0, 1, 1]} inclination={0} azimuth={0.25} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Controller active={active} setActive={setActive} />
        <Center top left>
          <Text>hello</Text>
        </Center>
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



  return (
    <>
      <DOM active={active} toggleModal={toggleModal}/>
      <R3F active={active} setActive={setActive}/>
      <Footer toggleModal={toggleModal} setToggleModal={setToggleModal} active={active}/>
      <R3F2 />
      {toggleModal != 0 ? <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} /> : <DOM2 />}
      
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
