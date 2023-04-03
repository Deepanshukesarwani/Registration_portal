import React from 'react'
import { useState } from 'react'
import "./form.css"
import axios from 'axios'
const form = () => {
  const [formdata,setformdata]=useState({name:"", year:"", gender:"", branch:"", section:"", email:"", contact_no:"", student_no:"", is_hosteler:"", dob:"",domain:""});
  function changehandler(event){
    // console.log(event.target.value);
    setformdata(previousResponce=>{
      return{
        ...previousResponce,
        [event.target.name]:event.target.value
      }

    });
  }
  function submitResponse(){
       console.log(formdata);
       axios.post("https://euphony-registration-k1zs.onrender.com/postdetails",formdata)
       .then((response)=>{
        console.log(response);
       })
  }
  return (
    <div className='form-wrapper' >
        <h1 className='form-heading'>Registration Form</h1>
        <div className="form-container">
        <form action='/'>
          <div className="form-nameyear">
               <div className="formNamediv">
                  <label htmlFor="form-name" className='labelHeading'  >Name:</label>
                       <input type="text" id='form-name' name="name" placeholder='Enter Your Full Name' className='inputfield'  onChange={changehandler}/>
               </div>
               <div className="formYeardiv">
                 <label htmlFor="form-year" className='labelHeading'  >Year:</label>
                   {/* <select name="year" id="form-year" className='inputfield' onChange={changehandler} >
                       <option value="first">First</option>
                       <option value="second">Second</option>
                   </select> */}
                   <input type="text" name="year" id="form-year" className='inputfield' onChange={changehandler} />
               </div>
          </div>
          <div className="form-maleFemale">
            <label htmlFor="genderRadiobox"  className='genderRadiotitle'>Male</label>
            <input type="radio" className='genderRadiobox' onChange={changehandler} name="gender" />
            <label htmlFor="genderRadiobox"  className='genderRadiotitle'>Female</label>
            <input type="radio" className='genderRadiobox' onChange={changehandler} name="gender"/>
          </div>
          <div className="form-branchSection">
              <div className="formBranchdiv">
                <label htmlFor="form-branch" className='labelHeading' >Branch:</label>
                         <input type="text" id='form-branch' className='inputfield' placeholder='Enter Your Branch' onChange={changehandler} name="branch"/>
              </div>
              <div className="formSectiondiv">
                <label htmlFor="form-section" className='labelHeading' >Section:</label>
                     <input type="text" id='form-section' className='inputfield'  placeholder='Enter Your Section' onChange={changehandler} name="section"/>
              </div>
          </div>
          <div className="form-emailContact">
               <div className="formEmaildiv">
                  <label htmlFor="form-email" className='labelHeading' >Email:</label>
                        <input type="email" className='inputfield' name='email' placeholder='College Mail Id' onChange={changehandler} />
               </div>
               <div className="formContactdiv">
                  <label htmlFor="form-contact" className='labelHeading'>Phone no:</label>
                         <input type="tel" name='contact_no' className='inputfield' placeholder='Enter Your Phone Number' onChange={changehandler}/>
               </div>
          </div>
          <div className="form-studentHosteler">
               <div className="formstudentdiv">
                  <label htmlFor="form-student" className='labelHeading'>Student No:</label>
                        <input type="number" name='student_no' placeholder='Enter Your student Number' className='inputfield' onChange={changehandler}/>
               </div>
               <div className="formhostelerdiv">
                  <label htmlFor="form-hosteler" className='labelHeading'>Are You Hosteler:</label>
                         {/* <select name="is_hosteler" id="form-hosteler"  className='inputfield' onChange={changehandler}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                         </select> */}
                         <input type="text"  name="is_hosteler" id="form-hosteler"  className='inputfield' onChange={changehandler} />
               </div>
          </div>    
               <div className="form-dob">
                   <label htmlFor="dob" className='labelHeading'>DATE OF BIRTH:</label>
                   <input type="date" className='inputfield' name='dob' onChange={changehandler}/>
               </div>
               <div className="form-domain">
                  <label htmlFor="domain"className='labelHeading' >Domain:</label>
                   {/* <select name="domain" id="domain" className='inputfield' name="domain" onChange={changehandler}>
                     <option value="vocalist"> Vocalist</option>
                     <option value="instrumentalist"> Instrumentalist</option>
                     <option value="vocalist/instrumentalist"> Vocalist & Instrumentalist</option>
                     <option value="designer">Designer</option>
                     <option value="production">Production</option>
                   </select> */}
                   <input type="text" name="domain" id="domain" className='inputfield'  onChange={changehandler}/>
               </div>
               {/* <button  onClick={submitResponse}/> */}
               <div className="submit&nextBUt">
               <button  type='button' onClick={submitResponse}>Submit</button>
               </div>
        </form>
        </div>
    </div>
  )
}

export default form
