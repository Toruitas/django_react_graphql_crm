import React, { Component, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';

import {loginAsync, selectLoggedIn} from './authSlice';
import logo from './generic_logo_lg.png';
import styles from "./Auth.module.scss";


const LOGIN_MUTATION = gql`
mutation TokenAuthMutation($username: String!,  $password: String!) {
  tokenAuth(username: $username, password:$password) {
    token
  }
}
`;

const LoginForm = () => {
    const [loginMut, { loading, error, data }] = useMutation(LOGIN_MUTATION, {errorPolicy:'all'});
    const history = useHistory();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        validationSchema: Yup.object({
            username: Yup.string()
              .min(5, 'Must be 5 characters or more')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Must be 8 characters or more')
              .required('Required'),
          }),
        onSubmit: values =>{
            loginMut({variables:{
                    username: values.username,
                    password: values.password
                }
            }).then(
                (data)=>{
                    if(!data.errors){
                        localStorage.setItem('refresh_token', data.data.tokenAuth.token);
                        dispatch(loginAsync(loginMut, values, history));
                    }
                }
            )
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

            {error && (
                <pre>{error.graphQLErrors.map(({ message }, i) => (
                    <span key={i}>{message}</span>
                ))}
                </pre>
            )}
            
            <div className="field">
                <div className="control">
                    <button className="button is-link" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default function Login(){
    const loggedIn = useSelector(selectLoggedIn);

     
    return (
        <div className={styles.authContainer}>
            <div>
                <img className={styles.authLogo} src={logo} alt="2-day CRM" width="400" height="100" />
            </div>
            <div className={styles.authFormUpper}>
                Login to return to your CRM dashboard.
            </div>
            <div className={styles.authForm}>
            <LoginForm/>
                If you're not already signed up, please <NavLink to={"/signup/"}>signup</NavLink> to gain access to the least-powerful CRM in existence!
            </div>
        </div>
    )
}