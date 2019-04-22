import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import * as firebase from 'firebase/app';
import { RetryLink } from 'apollo-link-retry';
import { environment } from 'src/environments/environment';
import { getLanguageCode } from 'src/i18n';

const retryLink = new RetryLink({
  attempts: {
    max: 2,
  },
});

const authLink = setContext(async (_, { headers }) => {
  let token;

  if (firebase.apps.length && firebase.auth().currentUser) {
    token = await firebase
      .auth()
      .currentUser.getIdToken(true);
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'Accept-Language': getLanguageCode(),
    },
  };
});

const httpLink = createHttpLink({
  uri: `${environment.backendUrl}`,
});

const graphqlClient = new ApolloClient({
  link: retryLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export default graphqlClient;
