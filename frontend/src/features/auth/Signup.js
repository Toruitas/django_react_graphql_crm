import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import styles from "./Auth.module.scss";
import {} from './authSlice';

const SIGNUP_MUTATION = gql`
  mutation CreateUserMutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password:$password) {
      id
      username
      email
    }
  }
`;

const SignupForm = () => {
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            username: Yup.string()
              .min(6, 'Must be 6 characters or more')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Must be 8 characters or more')
              .required('Required'),
          }),
        onSubmit: values =>{
            alert(JSON.stringify(values, null, 2));
        }        
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                id='username'
                name='username'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
            ) : null}
            <label htmlFor="email">Email Address</label>
            <input 
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="password">Password</label>
            <input 
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
            />
            {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default function Signup(){
     

    return (
        <div>
            <SignupForm/>
        </div>
    )
}
