// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_TAX_ADVICE = gql`
  mutation GetTaxAdvice($question: String!) {
    getTaxAdvice(question: $question)
  }
`;

export const GET_PACKAGES = gql`
  query {
    getPackages {
      id
      name
      price
      description
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $selectedPackage: String!
  ) {
    createUser(name: $name, email: $email, selectedPackage: $selectedPackage) {
      id
      name
      email
      selectedPackage
    }
  }
`;
