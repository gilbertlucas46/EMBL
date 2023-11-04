import { gql } from "@apollo/client";

// NOTE:💁 Notice the query is already sorted to highest overall association
// display highest overall association score
// orderByScore doesn't seem to work properly either

// ✅ Ensure that the data table only displays the 10 targets with the highest overall association score and sort the table by the overall association score value.

export const LUNG_CARCINOMA_ASSOCIATED_TARGETS_QUERY = gql`
  query lungCarcinomaAssociatedTargets {
    disease(efoId: "EFO_0001071") {
      id
      associatedTargets(page: { index: 0, size: 10, }) {
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
