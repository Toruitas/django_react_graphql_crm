import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloProvider, ApolloClient, InMemoryCache  } from '@apollo/client';

import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

let host = window.location.host;

const httpLink = createHttpLink({ uri: host+'/graphql/' })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('refresh_token')
  // const token = Cookies.get('token') SHOULD BE USING COOKIES FOR BETTER SECURITY

  return {
    headers: {
      ...headers,
      authorization: `JWT ${token}`
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();