import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    selectedPackage: String
  }

  type Package {
    id: ID!
    name: String!
    price: Float!
    description: String!
  }

  type Query {
    getUser(id: ID!): User
    getPackages: [Package!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, selectedPackage: String!): User
    updateUserPackage(id: ID!, selectedPackage: String!): User
    getTaxAdvice(question: String!): String
  }
`;
