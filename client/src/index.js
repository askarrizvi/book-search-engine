import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Need to create an ApolloClient to start the client
const client = new ApolloClient({
  uri: 'http://localhost:3000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  // Need to use ApolloProvider to fix Invariant Violation error
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);
