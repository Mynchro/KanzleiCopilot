import { gql } from "apollo-server-express";

export const typeDefs = gql`
  input ClientUpdateInput {
    legalForm: String
    taxDuties: [ID]
    services: [ID]
  }

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
    updateClient(id: ID!, input: ClientUpdateInput): Client
    getTaxAdvice(question: String!): String
  }
`;
