// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_TAX_ADVICE = gql`
  mutation GetTaxAdvice($question: String!) {
    getTaxAdvice(question: $question)
  }
`;
