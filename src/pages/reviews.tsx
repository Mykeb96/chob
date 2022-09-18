import Link from "next/link";
import { BiHomeHeart } from 'react-icons/bi'
import { Stars, Sky } from '@react-three/drei'
import {useState} from 'react'
import Image from "next/image";

import nathan from '@/assets/images/Nathan.jpg'
import nox from '@/assets/images/Cheyone.jpg'
import bryce from '@/assets/images/Bryce.jpg'
import austin from '@/assets/images/Austin.jpg'

import Review from "@/components/Review";
import ReviewCard from '@/components/ReviewCard'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(0, 0, 0, 0.447);',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  color: 'white'
};



// dom components goes here
const FORM = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedReview, setSelectedReview] = useState({
    name: 'Nathan',
    controller: nathan
  })

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));



  return (
    <>
    <Link href='/'><BiHomeHeart className="back-arrow"/></Link>
      <div className='review-page-container'>

        <ReviewCard img={nathan} name={'Nathan'} handleOpen={handleOpen} setSelectedReview={setSelectedReview}/>
        <ReviewCard img={nox} name={'Cheyone'} handleOpen={handleOpen} setSelectedReview={setSelectedReview} />
        <ReviewCard img={bryce} name={'Bryce'} handleOpen={handleOpen} setSelectedReview={setSelectedReview} />
        <ReviewCard img={austin} name={'Austin'} handleOpen={handleOpen} setSelectedReview={setSelectedReview} />


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
      <FORM />
      <R3Fshop r3f />
    </>
  )
}
export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'New',
    },
  }
}