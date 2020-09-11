import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment" ;
import styles from "./SingleCustomer.module.scss";


const GET_CUSTOMER_MUTATION = gql`
query GetCustomersMutation($lookupId: String!) {
  customer(lookupId:$lookupId) {
    lookupId
    name
    businessName
    website
    createdAt
    description
    createdBy{
        id
        username
    }
  }
}
`;


export default function SingleCustomer(){
    const location = useLocation();
    let lookupSplit=location.pathname.split('/')
    let lookupId=lookupSplit[2];

    // const lookupId = this.props.match.params.lookupId;  // for components only.

    const { loading, error, data } = useQuery(GET_CUSTOMER_MUTATION,{
        variables: {
            lookupId
        }
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className={"container"}>
            <div>
                <div>
                    Name: {data.customer.name}
                </div>
                <div>
                    Business: {data.customer.businessName}
                </div>
                <div>
                    Website: {data.customer.website}
                </div>
                <div>
                    Description: {data.customer.description}
                </div>
                <div>
                    Customer added: {moment(data.customer.createdAt).calendar()}
                    
                </div>
                <div>
                    Customer added by: {data.customer.createdBy.username}
                </div>
            </div>
            <NavLink to={"/customer/create/"}>
                <button className={"button primary"}>Add a new customer</button>
            </NavLink>
        </div>
    )

}