import React from "react";
import {useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    address: {
      street: "",
      number: "",
      city: ""
    },
    password: "",
    confirmPassword: ""
  };
  
  const MyForm = () => {
    const onSubmit = values => {
      alert(JSON.stringify(formik.values, null, 2))
    
    };
  
    const formik = useFormik({
      initialValues,
      onSubmit
      
    });
  
    return (
        <div>
        <form onSubmit={formik.handleSubmit}>

          <input placeholder="Name" {...formik.getFieldProps("name")} />
          <br />
          <input placeholder="Email" {...formik.getFieldProps("email")} />
          <br />
          <input placeholder="Password" {...formik.getFieldProps("password")} />
          <br />
          <input placeholder="confirm password" {...formik.getFieldProps("confirmPassword")} />
          <br />
          <input placeholder="Address" {...formik.getFieldProps("address.street")} />
          <br />
          <input placeholder="City" {...formik.getFieldProps("address.city")} /><br />

          <button type="submit" > Submit </button>
         </form>
      </div>
    );
  };

  export default MyForm;