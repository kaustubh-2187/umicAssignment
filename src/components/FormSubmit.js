import React from 'react'
import { useState } from 'react';

import useForm from '../customHooks/useForm';
import validate from '../validation/validateInfo';

import './FormSubmit.css';

const FormSubmit = () => {

    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    

    return (
        <React.Fragment>
            <div className="heading-container">
                <h1 className="heading">
                    We urge you to use the provided form to enter your details and our team will contact you in the next 24 hours to address your issues.
                </h1>
            </div>
            <div className="form-container">
                <form  noValidate onSubmit={handleSubmit} action="https://formsubmit.co/kaustubhskamble10@gmail.com" method="POST">
                    <input id="name" type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} value={values.name} required />
                    {errors.name && <p>{errors.name}</p>}
                    <input id="phone" type="number" name="phone" placeholder="Enter Your Contact Number" onChange={handleChange} value={values.phone} required />
                    {errors.phone && <p>{errors.phone}</p>}
                    <input id="email" type="email" name="email" placeholder="Enter your Email id" onChange={handleChange} value={values.email} required />
                    {errors.email && <p>{errors.email}</p>}


                    <input type="hidden" name="_template" value="table"></input>
                    <input type="hidden" name="_subject" value="New submission at Sample Website!!"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    
                    <button type="submit">Send</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default FormSubmit
