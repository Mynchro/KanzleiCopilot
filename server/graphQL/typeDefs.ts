import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Client {
    id: ID
    name: String
    email: String
  }

  type Package {
    id: ID!
    name: String!
    price: Float!
    description: String!
  }

  type Query {
    getClient(id: ID!): Client
    getPackages: [Package!]!
  }

  type Mutation {
    createClient(name: String!, email: String!): Client
    getTaxAdvice(question: String!): String
  }
`;
