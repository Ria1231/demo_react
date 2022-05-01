import React, { useState } from 'react'

export const useForm = () => {

    const [values,setValues] = useState({});
    const [errors,setErrors] = useState({});

    const handleChange = (event) => {
        // event.persist();
        console.log("Element Name",event.target.email);
        console.log("Element Phone",event.target.phone);
    }

  return (
    values,
    errors,
    handleChange
  )
}
