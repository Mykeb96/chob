import Link from "next/link";
import { BiHomeHeart } from 'react-icons/bi'
import { Stars, Sky } from '@react-three/drei'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



// dom components goes here
const FORM = () => {

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


  return (
    <>
    <div>
    <Link href='/'><BiHomeHeart className="back-arrow"/></Link>
    
    <Accordion>
        <AccordionSummary
          expandIcon='+'
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordian"
          style={{backgroundColor: 'rgba(255, 192, 203, 0.626)', fontWeight: 'bold'}}
        >
          <p>Where can you ship to and how much is it?</p>
        </AccordionSummary>
        <AccordionDetails className="accordian2" style={{backgroundColor: 'rgba(255, 192, 203, 0.363)', fontStyle: 'italic', lineHeight: '25px', letterSpacing: '0.8px'}}>
        <p>- As of right now I&apos;m only taking orders in the PNW, if shipping is necessary it<br /> will be added to an order&apos;s total, shipping estimate is ~$10 (this is only an estimate)</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon='+'
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordian"
          style={{backgroundColor: 'rgba(255, 192, 203, 0.626)', fontWeight: 'bold'}}
        >
          <p>What does X mod do?</p>
        </AccordionSummary>
        <AccordionDetails className="accordian2" style={{backgroundColor: 'rgba(255, 192, 203, 0.363)', fontStyle: 'italic', lineHeight: '25px', letterSpacing: '0.8px'}}>
        <p>- I should and probably will make a document to describe what everything is, but<br /> until then your best bet is to <Link href="/contact">contact me</Link> and ask personally</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon='+'
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordian"
          style={{backgroundColor: 'rgba(255, 192, 203, 0.626)', fontWeight: 'bold'}}
        >
          <p>What&apos;s a Chob?</p>
        </AccordionSummary>
        <AccordionDetails className="accordian2" style={{backgroundColor: 'rgba(255, 192, 203, 0.363)', fontStyle: 'italic', lineHeight: '25px', letterSpacing: '0.8px'}}>
        <p>- A Chob is a PhobGCC that I made, I twisted the name a bit to make it more personal<br /> to me and because I thought it would be funny</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon='+'
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordian"
          style={{backgroundColor: 'rgba(255, 192, 203, 0.626)', fontWeight: 'bold'}}
        >
          <p>What&apos;s the difference between T2/T3 send in and &apos;no send in&apos;?</p>
        </AccordionSummary>
        <AccordionDetails className="accordian2" style={{backgroundColor: 'rgba(255, 192, 203, 0.363)', fontStyle: 'italic', lineHeight: '25px', letterSpacing: '0.8px'}}>
        <p>- T2/T3 send in&apos;s are for people to send me a controller to modify/turn into a Chob.<br /> &apos;No send in&apos;s&apos; are me making a controller from scratch using my inventory instead</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon='+'
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordian"
          style={{backgroundColor: 'rgba(255, 192, 203, 0.626)', fontWeight: 'bold'}}
        >
          <p>Is there any difference between a T2/T3?</p>
        </AccordionSummary>
        <AccordionDetails className="accordian2" style={{backgroundColor: 'rgba(255, 192, 203, 0.363)', fontStyle: 'italic', lineHeight: '25px', letterSpacing: '0.8px'}}>
        <p>- T2 controllers use metal stickboxes that don&apos;t last as long as the plastic ones found<br /> on T3 controller motherboards, you can find out which one you have using this<br /> website as a guide https://gccontrollerlibrary.com/guides/ (note: if your controller<br /> has had a shell swap at some point the best way to determine the T# is by opening the controller)</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon='+'
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordian"
          style={{backgroundColor: 'rgba(255, 192, 203, 0.626)', fontWeight: 'bold'}}
        >
          <p>How long does it usually take to get my order done?</p>
        </AccordionSummary>
        <AccordionDetails className="accordian2" style={{backgroundColor: 'rgba(255, 192, 203, 0.363)', fontStyle: 'italic', lineHeight: '25px', letterSpacing: '0.8px'}}>
        <p>- It varies depending on how long my queue is backed up and how much time I have to work<br /> on them, however I can give the estimate of 2-4 weeks once the order is placed</p>
        </AccordionDetails>
      </Accordion>
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