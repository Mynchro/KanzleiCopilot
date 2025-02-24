import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    type: String
    legalForm: String
    taxDuties: [String]
    services: [String]
  }

  type Package {
    id: ID!
    name: String!
    price: Float!
    description: String!
  }

  type Query {
    getClient(id: ID!): Client
    getClients: [Client!]!
    getPackages: [Package!]!
  }

  type Mutation {
    createClient(name: String!, email: String!): Client
    updateClientType(id: ID!, type: String!): Client
    updateClientLegalForm(id: ID!, legalForm: String!): Client
    updateClientTaxDuties(id: ID!, taxDuties: [String]!): Client
    updateClientServices(id: ID!, services: [String]!): Client
    getTaxAdvice(question: String!): String
  }
`;
