import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import {loginAsync, selectLoggedIn} from './authSlice';

import {} from './authSlice';
import styles from "./Auth.module.scss";
import logo from './generic_logo_lg.png';



const SIGNUP_MUTATION = gql`
  mutation CreateUserMutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password:$password) {
      user{
          id
          username
          email
      }
    }
  }
`;

const LOGIN_MUTATION = gql`
mutation TokenAuthMutation($username: String!,  $password: String!) {
  tokenAuth(username: $username, password:$password) {
    token
  }
}
`;

const SignupForm = (props) => {
    const [loginMut, { loading:loginLoading, error:loginError, data:loginData }] = useMutation(LOGIN_MUTATION, {errorPolicy:'all'});
    const [signupMut, { loading: signupLoading, error: signupError, data: signupData }] = useMutation(SIGNUP_MUTATION, {errorPolicy:'all'});
    const history = useHistory();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            username: Yup.string()
              .min(5, 'Must be 5 characters or more')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Must be 8 characters or more')
              .required('Required'),
          }),
        onSubmit: values =>{
            signupMut({variables:{
                username: values.username,
                email:values.email,
                password: values.password
            }
            })
            // .then(
            //     (data)=>{
            //         if(!data.errors){
            //             loginMut({variables:{
            //                 username: values.username,
            //                 password: values.password
            //             }
            //             }).then(
            //                 (data)=>{
            //                     if(!data.errors){
            //                         localStorage.setItem('refresh_token', data.data.tokenAuth.token);
            //                         dispatch(loginAsync(loginMut, values, history));
            //                     }
            //                 }
            //             )
            //             // dispatch message
            //         }else{
            //             console.log(data.errors);
            //         }
            //     }
            // )
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
            <label htmlFor="email">Email Address</label>
            <div className="control">
                <input 
                    className="input"
                    id='email'
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
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

            {loginError && (
                <pre>{loginError.graphQLErrors.map(({ message }, i) => (
                    <span key={i}>{message}</span>
                ))}
                </pre>
            )}

            {signupError && (
                <pre>{signupError.graphQLErrors.map(({ message }, i) => (
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

export default function Signup(){
     
    return (
        <div className={styles.authContainer}>
            <div>
                <img className={styles.authLogo} src={logo} alt="2-day CRM" width="400" height="100" />
            </div>
            <div className={styles.authForm}>
                <div className={styles.authFormUpper}>
                    Sign up to gain access to the least-powerful CRM in existence!
                </div>
                <SignupForm />
                If you've already signed up, please <NavLink to={"/login/"}>login</NavLink>.
            </div>
            
        </div>
    )
}
