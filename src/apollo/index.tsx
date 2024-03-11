import { FetchResult, fromPromise } from "apollo-link";
import { ApolloClient, InMemoryCache, ServerError } from "@apollo/client";
import { REFRESH_TOKEN } from "./mutations";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const GRAPHQL_URL = "http://localhost/api/v1/graphql";
const authMiddleware = setContext((request) => {
  const accessToken = window.localStorage.getItem("accessToken");
  return {
    headers: {
      authorization:
        !request.operationName?.includes("Login") && accessToken
          ? `Bearer ${accessToken}`
          : "",
    },
  };
});

const httpLink = createUploadLink({
  uri: (operation) =>
    `${GRAPHQL_URL}?operation=${encodeURIComponent(operation.operationName)}`,
  credentials: "include",
});

function getNewToken(refreshToken: string) {
  // Assuming you have defined the REFRESH_TOKEN_MUTATION somewhere
  return refreshApolloClient
    .mutate({
      mutation: REFRESH_TOKEN,
      variables: { refreshToken },
    })
    .then((response) => {
      // Extract the new accessToken from the response data and return it
      const { accessToken, refreshToken: newRefreshToken } =
        response.data.refreshToken;
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", newRefreshToken);
      return accessToken;
    })
    .catch(() => {
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("refreshToken");
      window.location.href = "/login";
      return;
    });
}
// @ts-ignore
const errorLink = onError((errorResponse) => {
  const { graphQLErrors, networkError, operation, forward } = errorResponse;
  const refreshToken = window.localStorage.getItem("refreshToken");
  function refetchToken(refreshToken: string) {
    return fromPromise<FetchResult>(getNewToken(refreshToken))
      .filter((value) => Boolean(value))
      .flatMap((accessToken) => {
        const oldHeaders = operation.getContext().headers;
        // modify the operation context with a new token
        operation.setContext({
          headers: {
            ...oldHeaders,
            authorization: `Bearer ${accessToken}`,
          },
        });

        // retry the request, returning the new observable
        return forward(operation);
      });
  }
  if (
    networkError &&
    (networkError as ServerError).statusCode === 403 &&
    refreshToken
  ) {
    return refetchToken(refreshToken);
  } else if (graphQLErrors) {
    for (const { extensions } of graphQLErrors) {
      if (extensions?.errorCode === "VALIDATION_ERROR" && refreshToken) {
        return refetchToken(refreshToken);
      }
    }
  } else {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    window.location.href = "/login";
  }
});

const refreshApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const setupApollo = () => {
  const client = new ApolloClient({
    credentials: "include",
    link: errorLink.concat(authMiddleware.concat(httpLink)),
    cache: new InMemoryCache(),
  });

  return client;
};

export default setupApollo;
