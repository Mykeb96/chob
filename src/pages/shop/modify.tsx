import Link from "next/link";
import { Stars, Sky } from '@react-three/drei'
import { Formik, validateYupSchema } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { GiReturnArrow } from 'react-icons/gi'
import emailjs from '@emailjs/browser';
import React, { useRef, useState, useEffect } from 'react';
import * as Yup from 'yup';



// dom components goes here
const FORM = () => {

  const form = useRef();
  const [total, setTotal] = useState<number>(0)

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className="big-container">
      <Link href='/shop'><GiReturnArrow className="back-arrow"/></Link>
      {/* <Link href='/'><BiHomeHeart className="home-button"/></Link> */}
    <div className="modify-container">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        checked: [],
        send: 'N/A',
        shell: 'N/A',
        approxTotal: 0,
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        values.approxTotal = total
        await sleep(500);
        emailjs.sendForm('service_z8ks1wy', 'modify_template', form.current, 'yK_EpYPRUWUzDrDBq')
        .then((result) => {
            console.log(result.text);
            alert('Email successfully sent! Expect to recieve and email from Chainlink within a few business days');
        }, (error) => {
            console.log(error.text);
        });
        await sleep(500);
        window.location.reload();
        
      }}
    >
      {({values, errors, touched, handleSubmit, handleChange}) => (
             <form ref={form} onSubmit={handleSubmit} className='form-container'>

                
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
                          }} id="firstName" name='firstName' label="First Name" variant="outlined" onChange={handleChange} margin='normal'/>
                          {errors.firstName && touched.firstName ? (
                            <div style={{color: 'red'}}>{errors.firstName}</div>
                          ) : null}
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
                          }}  id="lastName" name='lastName' label="Last Name" variant="outlined" onChange={handleChange} margin='normal'/>
                          {errors.lastName && touched.lastName ? (
                            <div style={{color: 'red'}}>{errors.lastName}</div>
                          ) : null}
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
                          }}  id="email" name='email' label="Email" variant="outlined" onChange={handleChange} margin='normal' style={{width: '400px'}} fullWidth/>
                          {errors.email && touched.email ? (
                            <div style={{color: 'red'}}>{errors.email}</div>
                          ) : null}


                <h4>** Please select any/all modifications you would like to recieve **</h4>
                <h5>** Stock may vary **</h5>
                <div className="mod-options">
                <div className="mod-options1">
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}}/>} label="No Reset Snapback Capacitor (NOT CHOB COMPATIBLE) - $35" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    console.log(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 35)
                                    } else {
                                      setTotal(total - 35)
                                    }
                                    
                }} value='No Reset Snapback Capacitor'/>
                <FormControlLabel disabled={true} control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} id='test'/>} label="Bald Buttons - $25" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 35)
                                    } else {
                                      setTotal(total - 35)
                                    }
                                    
                }} value='Bald Buttons'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Button Pad Perforation - $5" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 25)
                                    } else {
                                      setTotal(total - 25)
                                    }
                                    
                }} value='Button Pad Perforation'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Potentiometer Replacement (NOT CHOB COMPATIBLE) - $5" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 5)
                                    } else {
                                      setTotal(total - 5)
                                    }
                                    
                }} value='Potentiometer Replacement'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Stickbox Replacement - $15" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 15)
                                    } else {
                                      setTotal(total - 15)
                                    }
                                    
                }} value='Stickbox Replacement'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="PTFE tape stablization - $10" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 10)
                                    } else {
                                      setTotal(total - 10)
                                    }
                                    
                }} value='PTFE Tape Stablization'/>
                </div>
                <div className="mod-options2">
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Stickbox Lubrication - $12" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 12)
                                    } else {
                                      setTotal(total - 12)
                                    }
                                    
                }} value='Stickbox Lubrication'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Trigger Spring cut/lube - $8 ($5 cut only)" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 8)
                                    } else {
                                      setTotal(total - 8)
                                    }
                                    
                }} value='Trigger Spring cut/lube'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Retrobright - $10-$50" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 30)
                                    } else {
                                      setTotal(total - 30)
                                    }
                                    
                }} value='Retrobright'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Tactile Z - $5" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 5)
                                    } else {
                                      setTotal(total - 5)
                                    }
                                    
                }} value='Tactile Z'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Stick Replacement - $10" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 10)
                                    } else {
                                      setTotal(total - 10)
                                    }
                                    
                }} value='Stick Replacement'/>
                <FormControlLabel control={<Checkbox style={{color: 'pink'}} sx={{'& .MuiSvgIcon-root': { fontSize: 25 }}} />} label="Trigger Plugs - $5" name="checked" onChange={(event) => {
                                    handleChange(event)
                                    if ((event.target as HTMLInputElement).checked == true) {
                                      setTotal(total + 5)
                                    } else {
                                      setTotal(total - 5)
                                    }
                                    
                }} value='Trigger Plugs'/>
                </div>
                </div>
               <button className="form-submit" type="submit">Submit</button>
               <span style={{marginTop: '10px'}}>Approximate Total: ${total}</span>
               <input type="number" value={total} style={{display: 'none'}} name='approxTotal'/>
               <input type="text" value={'N/A'} style={{display: 'none'}} name='send'/>
               <input type="text" value={'N/A'} style={{display: 'none'}} name='shell'/>
             </form>
           )}
    </Formik>
    </div>
    </div>
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
      title: 'Modify'
    },
  }
}