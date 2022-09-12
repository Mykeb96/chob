import Link from "next/link";
import { BiHomeHeart } from 'react-icons/bi'
import { Stars, Sky } from '@react-three/drei'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Formik, Field, Form, useFormikContext  } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";


// dom components goes here
const FORM = () => {

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


  return (
    <>
    <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        checked: [],
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {props => (
             <form onSubmit={props.handleSubmit} className='form-container'>

                <TextField color="secondary" id="firstName" name='firstName' label="First Name" variant="outlined" onChange={props.handleChange} margin='normal'/>
                <TextField color="secondary" id="lastName" name='lastName' label="Last Name" variant="outlined" onChange={props.handleChange} margin='normal'/>
                <TextField color="secondary" id="email" name='email' label="Email" variant="outlined" onChange={props.handleChange} margin='normal' fullWidth/>

                <h4>** Please select any/all modifications you would like to recieve **</h4>
                <h5>** Stock may vary **</h5>

                <FormControlLabel control={<Checkbox color='secondary'/>} label="No Reset Snapback Capacitor (NOT CHOB COMPATIBLE) - $35" name="checked" onChange={props.handleChange} value='No Reset Snapback Capacitor'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Bald Buttons - $25" name="checked" onChange={props.handleChange} value='Bald Buttons'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Button Pad Perforation - $5" name="checked" onChange={props.handleChange} value='Button Pad Perforation'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Potentiometer Replacement - $5" name="checked" onChange={props.handleChange} value='Potentiometer Replacement'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Stickbox Replacement - $15" name="checked" onChange={props.handleChange} value='Stickbox Replacement'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="PTFE tape stablization - $10" name="checked" onChange={props.handleChange} value='PTFE Tape Stablization'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Stickbox Lubrication - $12" name="checked" onChange={props.handleChange} value='Stickbox Lubrication'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Trigger Spring cut/lube - $8 ($5 cut only)" name="checked" onChange={props.handleChange} value='Trigger Spring cut/lube'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Retrobright - $10-$50" name="checked" onChange={props.handleChange} value='Retrobright'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Tactile Z - $5" name="checked" onChange={props.handleChange} value='Tactile Z'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Stick Replacement - $10" name="checked" onChange={props.handleChange} value='Stick Replacement'/>
                <FormControlLabel control={<Checkbox color='secondary' />} label="Trigger Plugs - $5" name="checked" onChange={props.handleChange} value='Trigger Plugs'/>
               <button className="form-submit" type="submit">Submit</button>
             </form>
           )}
    </Formik>
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