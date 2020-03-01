import React from "react";
import "./App.css";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import Books from "./Books";

const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:4000/graphql"
  }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Books />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
