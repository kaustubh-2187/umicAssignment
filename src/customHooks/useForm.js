import React from 'react'
import { useState, useEffect } from 'react'

import emailjs from 'emailjs-com';


const useForm = validate => {
    const [values, setValues] = useState({
        name : '',
        phone : '',
        email : ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        console.log(e.target)

        if (Object.keys(errors).length === 0) {
            emailjs.sendForm('service_0gagesj', 'template_2a2hji8', e.target, 'user_8CoLNwycjuaWRonNKxEVz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        } 

    }

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;
