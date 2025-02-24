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

export const CREATE_CLIENT = gql`
  mutation CreateClient($name: String!, $email: String!) {
    createClient(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
