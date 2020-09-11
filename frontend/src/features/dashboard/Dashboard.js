import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./Dashboard.module.scss";

import Table from "./table/Table";


export default function Dashboard(){
    
     
    return (
        <div className={"section"}>
            <div class={"container"}>
                <div class={styles.intro}>
                    As a CSR at Generic Co, you can use this special CMS to manage our valuable customers. 
                    You can add new customers, edit customer info, and browse the whole list of customers.  
                    Don't forget, if you've had a contact with one of them, you must add a meeting to their file.
                </div>
            </div>
            <Table/>
        </div>
    )
}
