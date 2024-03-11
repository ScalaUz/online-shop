import { gql } from "@apollo/client";

const userData = gql`
  id
  firstname
  image {
    url
  }
`;

export const AUTHED_USER = gql`query AuthedUser {
  currentUser {
    ${userData}
    privileges
    email
  }
}`;
