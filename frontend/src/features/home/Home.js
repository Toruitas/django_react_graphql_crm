import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Home.module.scss";


export default function Home(){
     
    return (
        <div className={styles.homeContainer}>
           <NavLink className="button" to={"/dashboard/"}>View dashboard</NavLink>
           {/* View users */}
        </div>
    )
}
