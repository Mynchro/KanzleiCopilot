import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Client {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    type: String
    legalForm: String
    taxDuties: [String]
    services: [String]
  }

  type TaxDuty {
    id: ID!
    name: String!
    description: String!
    frequency: String!
    amount: Int!
    dueDate: String!
  }

  type Service {
    id: ID!
    name: String!
    description: String
    price: Int!
    frequency: String!
    serviceType: String!
  }

  type Query {
    getClient(id: ID!): Client
    getClients: [Client!]!
    getTaxDuties: [TaxDuty]
    getServices: [Service]
  }

  type Mutation {
    createClient(firstName: String!, lastName: String!, email: String!): Client
    updateClientType(id: ID!, type: String!): Client
    updateClientLegalForm(id: ID!, legalForm: String!): Client
    updateClientTaxDuties(id: ID!, taxDuties: [String]!): Client
    updateClientServices(id: ID!, services: [String]!): Client
    getTaxAdvice(question: String!): String
  }
`;
