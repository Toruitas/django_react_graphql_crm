import React, { Component, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import queryString from 'query-string';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./CreateCustomer.module.scss";


const CREATE_CUSTOMER_MUTATION = gql`
mutation CreateCustomerMutation($name: String!,  $businessName: String, $phoneNumber: String, $email:String, $website:String, $description:String) {
  createCustomer(name: $name, businessName:$businessName, phoneNumber: $phoneNumber, email: $email, website:$website, description:$description) {
    customer{
        name,
        businessName,
        phoneNumber,
        email,
        website,
        description,
        lookupId,
        createdAt,
        createdBy{
          username
        }
      }
  }
}
`;


const CreateCustomerForm = () => {
    const [createCustomerMut, { loading, error, data }] = useMutation(CREATE_CUSTOMER_MUTATION, {errorPolicy:'all'});
    const history = useHistory();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            name:'',
            businessName:'',
            phoneNumber:'',
            email:'',
            website:'',
            description:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .min(2, 'Must be longer than 1 character')
              .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
          }),
        onSubmit: values =>{
            createCustomerMut({variables:{
                    name: values.name,
                    businessName: values.businessName,
                    phoneNumber: values.phoneNumber,
                    email: values.email,
                    website: values.website,
                    description: values.description,
                }
            }).then(
                (data)=>{
                    if(!data.errors){
                        // redirect to the new customer's page
                        history.push("/customer/"+data.data.createCustomer.customer.lookupId+"/")
                    }
                }
            )
        }
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <div className="control">
                    <input 
                        className="input"
                        id='name'
                        name='name'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                </div>
                {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
                ) : null}
            </div>
            <div className="field">
                <label htmlFor="businessName">Business Name</label>
                <div className="control">
                    <input 
                        className="input"
                        id='businessName'
                        name='businessName'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.businessName}
                    />
                </div>
                {formik.touched.businessName && formik.errors.businessName ? (
                <div>{formik.errors.businessName}</div>
                ) : null}
            </div>
            <div className="field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <div className="control">
                    <input 
                        className="input"
                        id='phoneNumber'
                        name='phoneNumber'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                    />
                </div>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
                ) : null}
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <div className="control">
                    <input 
                        className="input"
                        id='email'
                        name='email'
                        type='text'
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
                <label htmlFor="website">Email</label>
                <div className="control">
                    <input 
                        className="input"
                        id='website'
                        name='website'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.website}
                    />
                </div>
                {formik.touched.website && formik.errors.website ? (
                <div>{formik.errors.website}</div>
                ) : null}
            </div>
            <div className="field">
                <label htmlFor="description">Email</label>
                <div className="control">
                    <input 
                        className="input"
                        id='description'
                        name='description'
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                </div>
                {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
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

export default function CreateCustomer(){
     
    return (
        <div>
            <div>
                <CreateCustomerForm/>
            </div>
        </div>
    )
}