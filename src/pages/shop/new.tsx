import Link from "next/link";
import { BiHomeHeart } from 'react-icons/bi'
import { Stars, Sky } from '@react-three/drei'
import { useState, useRef } from 'react'
import { Formik, validateYupSchema } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormControl, InputLabel, NativeSelect, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import { GiReturnArrow } from 'react-icons/gi'
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';


const FORM = () => {

  const [total, setTotal] = useState<number>(0)
  const [chobTotal, setChobTotal] = useState<number>(0)
  const [shellTotal, setShellTotal] = useState<number>(0)
  const form = useRef();

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

    <div className="modify-container">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        send: '',
        approxTotal: 0,
        shell: '',
        checked: []
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        
        await sleep(500);
        emailjs.sendForm('service_z8ks1wy', 'modify_template', form.current, 'yK_EpYPRUWUzDrDBq')
        .then((result) => {
            console.log(result.text);
            alert('Email successfully sent! Expect to recieve and email from Chainlink within a few business days');
        }, (error) => {
            console.log(error.text);
        });
        // alert(JSON.stringify(values, null, 2));
        await sleep(1000);
        window.location.reload();

        
      }}
    >
      {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
             <form ref={form} onSubmit={handleSubmit} className='new-container'>

                
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

                


            <select
              name="send"
              onChange={(event) => {
                handleChange(event)
                console.log(event.target)
                if(event.target.value == 'No Send in'){
                  setChobTotal(160)
                } else if (event.target.value == 'T3 Send in'){
                  setChobTotal(120)
                } else if (event.target.value == 'T2 Send in'){
                  setChobTotal(145)
                } else if (event.target.value == 'Brand New Ult Black Build'){
                  setChobTotal(160)
                } else if (event.target.value == ""){
                  setChobTotal(0)
                }
              }}
              size={1}
              value={values.send}
              multiple={false}
              onBlur={handleBlur}
              style={{ display: "block", border: '1px solid pink', background: 'rgba(0, 0, 0, 0.253)', color: 'white', borderRadius: '4px', marginBottom: '10px', fontSize: '20px' }}
            >
              <option value="" label="Select Chob Type">
                
              </option>
              <option value="No Send in" label="No Send in - $160 + Shell color">
                {" "}
                No Send in - $160 + Shell color
              </option>
              <option value="T3 Send in" label="T3 Send in - $120 + Shell Swap (Optional)">
                T3 Send in - $120 + Shell Swap (Optional)
              </option>
              
              <option value="T2 Send in" label="T2 Send in - $145 + Shell Swap (Optional)">
              T2 Send in - $145 + Shell Swap (Optional)
              </option>

              <option value="Brand New Ult Black Build" label="Brand New Ult Black Build - $160">
              Brand New Ult Black Build - $160
              </option>
            </select>

            <select
              name="shell"
              value={values.shell}
              onChange={(event) => {
                handleChange(event)
                console.log(event.target)
                if(event.target.value == ''){
                  setShellTotal(0)
                } else if (event.target.value == 'Ultimate Black Shell'){
                  setShellTotal(20)
                } else if (event.target.value == 'Black Shell'){
                  setShellTotal(20)
                } else if (event.target.value == 'Platinum Shell'){
                  setShellTotal(25)
                } else if (event.target.value == "Indigo Shell"){
                  setShellTotal(30)
                }
              }}
              onBlur={handleBlur}
              multiple={false}
              style={{ display: "block", border: '1px solid pink', background: 'rgba(0, 0, 0, 0.253)', color: 'white', borderRadius: '4px', fontSize: '20px' }}
            >
              <option value="" label="Select Shell" onClick={() => setShellTotal(0)}>
                Select a Shell{" "}
              </option>
              <option value="Ultimate Black Shell" label="Ultimate Black - $20" onClick={() => setShellTotal(20)}>
                {" "}
                Ultimate Black - $20
              </option>
              <option value="Black Shell" label="Black - $20" onClick={() => setShellTotal(20)}>
                Black - $20
              </option>
              
              <option value="Platinum Shell" label="Platinum - $25" onClick={() => setShellTotal(25)}>
                Platinum - $25
              </option>

              <option value="Indigo Shell" label="Indigo - $30" onClick={() => setShellTotal(30)}>
              Indigo - $30
              </option>
            </select>

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


               <button className="form-submit">Submit</button>

               <span style={{marginTop: '10px'}}>Approximate Total: ${total + chobTotal + shellTotal}</span>
               <input type="number" value={total + chobTotal + shellTotal} style={{display: 'none'}} name='approxTotal'/>
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
      title: 'New',
    },
  }
}