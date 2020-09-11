import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from './generic_logo_lg.png';
import { gql, useMutation } from '@apollo/client';
import styles from "./Auth.module.scss";
import { NavLink } from 'react-router-dom';


const LOGIN_MUTATION = gql`
mutation TokenAuthMutation($username: String!,  $password: String!) {
  tokenAuth(username: $username, password:$password) {
    token
  }
}
`;

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        validationSchema: Yup.object({
            username: Yup.string()
              .min(6, 'Must be 6 characters or more')
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
            <div className="field">
                <label htmlFor="username">Username</label>
                <div className="control">
                    <input 
                        className="input"
                        id='username'
                        name='username'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                </div>
                {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
                ) : null}
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <div className="control">
                    <input 
                        className="input"
                        id='password'
                        name='password'
                        type='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                </div>
                {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-link" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default function Login(){
     
    return (
        <div className={styles.authContainer}>
            <div>
                <img src={logo} alt="2-day CRM" />
            </div>
            <div className={styles.authFormUpper}>
                Login to return to your CRM dashboard.
            </div>
            <div className={styles.authForm}>
                <LoginForm />
                If you're not already signed up, please <NavLink to={"/signup/"}>signup</NavLink> to gain access to the least-powerful CRM in existence!
            </div>
        </div>
    )
}