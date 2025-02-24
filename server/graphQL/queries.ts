import { gql } from "@apollo/client";

// AI-Advisor
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

// client-related
export const CREATE_CLIENT = gql`
  mutation CreateClient($name: String!, $email: String!) {
    createClient(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const GET_CLIENTS = gql`
  query GetClients {
    getClients {
      id
      name
      type
      legalForm
      taxDuties
      services
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($id: ID!, $input: ClientUpdateInput!) {
    updateClient(id: $id, input: $input) {
      id
      type
      legalForm
      taxDuties
      services
    }
  }
`;
