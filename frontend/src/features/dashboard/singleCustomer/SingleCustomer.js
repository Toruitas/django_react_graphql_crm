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
            <div className={"tile is-parent is-info"}>
                <div className={"tile is-child"}>
                    <p className="title">Name:</p>
                    <p className={"subtitle"}>{data.customer.name}</p>
                </div>
                <div className={"tile is-child"}>
                    <p className="title">Business:</p>
                    <p className={"subtitle"}>{data.customer.businessName}</p>
                </div>
                <div className={"tile is-child"}>
                    <p className="title">Website:</p>
                    <p className={"subtitle"}>{data.customer.website}</p>
                </div>
            </div>
            <div className={"tile is-parent is-info"}>
                <div className={"tile is-child"}>
                    <p className="title">Description:</p>
                    <p className={"subtitle"}>{data.customer.description}</p>
                </div>
                <div className={"tile is-child"}>
                    <p className="title">Customer added:</p>
                    <p className={"subtitle"}>{moment(data.customer.createdAt).calendar()}</p>
                </div>
                <div className={"tile is-child"}>
                    <p className="title">Customer added by:</p>
                    <p className={"subtitle"}>{data.customer.createdBy.username}</p>
                </div>
            </div>
            <NavLink to={"/customer/create/"}>
                <button className={"button primary"}>Add a new customer</button>
            </NavLink>
        </div>
    )

}