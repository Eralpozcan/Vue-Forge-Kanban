import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client/core";
  const httpLink = createHttpLink({
    uri: "https://api.8base.com/cl62b12w303sk09js831tfixh",
  });
  
  const cache = new InMemoryCache();
  
  export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });