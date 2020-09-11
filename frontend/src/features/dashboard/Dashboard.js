import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Dashboard.module.scss";

import Table from "./table/Table";


export default function Dashboard(){
    
     
    return (
        <div className={"section"}>
            <Table/>
        </div>
    )
}
