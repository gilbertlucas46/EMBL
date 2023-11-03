import { gql } from "@apollo/client";

export const LUNG_CARCINOMA_ASSOCIATED_TARGETS_QUERY = gql`
  query lungCarcinomaAssociatedTargets {
    disease(efoId: "EFO_0001071") {
      id
      associatedTargets(page: { index: 0, size: 10 }) {
        rows {
          target {
            id
            approvedSymbol
            approvedName
          }
          score
          datatypeScores {
            id
            score
          }
        }
        count
      }
    }
  }
`;
