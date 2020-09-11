import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import moment from "moment" ;
import styles from "./Table.module.scss";


const GET_CUSTOMERS_MUTATION = gql`
query GetCustomersMutation($search: String, $first:Int, $skip:Int) {
  customers(search:$search, first:$first, skip:$skip) {
    lookupId
    name
    businessName
    website
    createdAt
    createdBy{
        id
        username
    }
  }
}
`;

export default function Table(){
    const { loading, error, data } = useQuery(GET_CUSTOMERS_MUTATION);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
     
    return (
        <div className="container">
            <table className={"table is-hoverable is-fullwidth"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Business</th>
                        <th>Website</th>
                        <th>Created At</th>
                        <th>Contacted By</th>
                    </tr>
                </thead>
                <tbody>
                    {data.customers.map(customer=>(
                        <tr key={customer.lookupId}>
                            <th>
                                {customer.name}
                            </th>
                            <td>
                                {customer.businessName}
                            </td>
                            <td>
                                <a href={customer.website}>Link</a>
                            </td>
                            <td>
                                {moment(customer.createdAt).calendar()}
                            </td>
                            <td>
                                {customer.createdBy.username}
                            </td>
                            <td>
                                <button className={"button"}>Add meeting</button>
                            </td>
                        </tr>
                        
                    ))}
                    
                </tbody>
            </table>
        </div>
        
    )
}