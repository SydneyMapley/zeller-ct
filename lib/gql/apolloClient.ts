import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import merge from "deepmerge";
import { ErrorLink } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { AuthOptions, createAuthLink } from "aws-appsync-auth-link";

const url = process.env.aws_appsync_graphqlEndpoint as string;
const region = process.env.aws_appsync_region as string;
const auth: AuthOptions = {
  type: "API_KEY",
  apiKey: process.env.aws_appsync_apiKey as string,
};

function createApolloClient() {
  if (!process.env.aws_appsync_graphqlEndpoint) {
    throw new Error("aws_appsync_graphqlEndpoint env value missing");
  }
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      new RetryLink({
        delay: {
          initial: 500,
          max: 2000,
          jitter: true,
        },
        attempts: {
          max: 5,
          retryIf: (error, _operation) => !!error,
        },
      }),
      new ErrorLink(({ graphQLErrors, operation }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach((gqlErr) => {
            const { message } = gqlErr;
            console.log(message, gqlErr, operation);
          });
        }
      }),
      new ApolloLink((operation, forward) => {
        return forward(operation);
      }),
      createAuthLink({ url, region, auth }),
      new HttpLink({
        uri: process.env.aws_appsync_graphqlEndpoint,
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            entry: {
              merge(existing = {}, incoming) {
                return { ...existing, ...incoming };
              },
            },
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState = null) {
  const apolloClient = createApolloClient();

  if (initialState) {
    const existingCache = apolloClient.extract();

    const data = merge(initialState, existingCache);
    apolloClient.cache.restore(data);
  }

  if (typeof window === "undefined") return apolloClient;

  return apolloClient;
}
