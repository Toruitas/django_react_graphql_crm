import React, { Component, useState, useEffect  } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Home.module.scss";


export default function Home(){

    // for now just redirect to the dashboard automatically.
    let history = useHistory();
    useEffect(()=>{
        history.push("/dashboard/");
    });
    
     
    return (
        <div className={styles.homeContainer}>
           <NavLink className="button" to={"/dashboard/"}>View dashboard</NavLink>
        </div>
    )
}
