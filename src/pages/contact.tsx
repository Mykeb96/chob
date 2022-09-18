import Link from "next/link";
import { BiHomeHeart } from 'react-icons/bi'
import { Stars, Sky } from '@react-three/drei'
import { useState } from 'react'
import { Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import { GiReturnArrow } from 'react-icons/gi'



// dom components goes here
const FORM = () => {

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


  return (
    <>
    <div>
    <Link href='/'><BiHomeHeart className="back-arrow"/></Link>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
        
      }}
    >
      {props => (
             <form onSubmit={props.handleSubmit} className='form-container'>

                
              <TextField sx={{"& .MuiOutlinedInput-root": {
                              "& > fieldset": { borderColor: "pink" },
                        },     "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                        borderColor: "pink"
                          }},"& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                              borderColor: "white"
                            }
                          }
                          }} id="firstName" name='firstName' label="First Name" variant="outlined" onChange={props.handleChange} margin='normal'/>
                <TextField sx={{"& .MuiOutlinedInput-root": {
                              "& > fieldset": { borderColor: "pink" },
                        },     "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                        borderColor: "pink"
                          }},"& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                              borderColor: "white"
                            }
                          }
                          }}  id="lastName" name='lastName' label="Last Name" variant="outlined" onChange={props.handleChange} margin='normal'/>
                <TextField sx={{"& .MuiOutlinedInput-root": {
                              "& > fieldset": { borderColor: "pink" },
                        },     "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                        borderColor: "pink"
                          }},"& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                              borderColor: "white"
                            }
                          }
                          }}  id="email" name='email' label="Email" variant="outlined" onChange={props.handleChange} margin='normal' style={{width: '500px'}} fullWidth/>

              <TextareaAutosize
                aria-label="empty textarea"
                style={{ width: 550, height: 200, background: 'rgba(0, 0, 0, 0.253)', border: '1px solid pink', borderRadius: '4px', color: 'white', marginTop: '20px' }}
                placeholder='Hello! Be sure to check the FAQ first - it could save you some time!'
                name='message'
                onChange={props.handleChange}
                
              />
              

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