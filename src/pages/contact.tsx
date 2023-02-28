import Link from "next/link";
import { BiHomeHeart } from 'react-icons/bi'
import { Stars, Sky } from '@react-three/drei'
import { Formik, FormikHelpers } from 'formik';
import { TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import * as Yup from 'yup';



// dom components goes here
const FORM = () => {

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

  const form = useRef();


  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  interface Values {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }


  return (
    <div className="big-container">
    <Link href='/'><BiHomeHeart className="back-arrow"/></Link>

    <div className="contact-container">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, {setValues}) => {

        await sleep(500);
        emailjs.sendForm('service_z8ks1wy', 'contact_form', form.current, 'yK_EpYPRUWUzDrDBq')
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

              <TextareaAutosize
                aria-label="empty textarea"
                style={{ width: '374px', height: 200, background: 'rgba(0, 0, 0, 0.253)', border: '1px solid pink', borderRadius: '4px', color: 'white', marginTop: '20px' }}
                placeholder='Hello! Be sure to check the FAQ first - it could save you some time!'
                name='message'
                onChange={handleChange}
                
              />
              

               <button className="form-submit" type="submit">Submit</button>
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
      title: 'Contact',
    },
  }
}