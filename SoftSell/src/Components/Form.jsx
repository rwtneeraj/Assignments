import React, { useState } from 'react'

const Form = ({contactRef}) => {
    const [error,setError] = useState(false);
    const [input,setInput] = useState({firstName:'',lastName:'',email:'',company:'',LicenseType:''})

    const handleInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setInput({...input,key:value});
    }
    
    const handleSubmit =()=> {
       if(!firstName && !email && !lastName && !LicenseType && !company){
        setError(true)
       } 
    }

  return (
      <form
        className="form-section w-200 mx-auto shadow-2xl mh-60 p-30"
        id="Contact-form"
        ref={contactRef}
        method="post"
    
      >
        <h1 className="text-center text-2xl">Contact Details</h1>
        <div className="form grid grid-cols-2 gap-10 justify-center mt-10 p-3">
          <div className="flex flex-col ">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name='firstName'
              className="border-1 w-60 h-10 rounded-2xl p-3"
              required
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              className="border-1 w-60 h-10 rounded-2xl p-3"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="border-1 w-60 h-10 rounded-2xl p-3"
              required
            /> 
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Company</label>
            <input
              type="text"
              className="border-1 w-60 h-10 rounded-2xl p-3"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">License Type</label>
            <input
              type="text"
              className="border-1 w-60 h-10 rounded-2xl p-3"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Message</label>
            <textarea name="" id="" className="border-1" required></textarea>
          </div>
          <button className="submit-btn text-white bg-linear-to-t from-sky-500 to-indigo-500 w-50 h-16 rounded-full cursor-pointer " onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
  )
}

export default Form