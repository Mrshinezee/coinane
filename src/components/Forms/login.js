import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './login.scss'

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} >
          {label}
        </label>
      <input className="text-input" {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
const Login = (props) => {
  return (
    <div className='loginContainer'>
      <h2 className='loginHeader'>Log In</h2>
      <div className='formContainer'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
        props.data(values)

        }}
      >
        <Form className='loginForm'>
          <MyTextInput
            className="emai"
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder=""
          />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
      </div>
    </div>
  );
};
export default Login