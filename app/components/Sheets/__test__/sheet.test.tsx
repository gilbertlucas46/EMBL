import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sheet from "@/app/components/Sheets/Sheets";

// Sample data for testing
const sampleData = {
  associatedTargets: {
    rows: [
      {
        target: {
          id: "ENSG00000146648",
          approvedSymbol: "EGFR",
          approvedName: "epidermal growth factor receptor",
        },
        score: 0.902586572150403,
        datatypeScores: [
          {
            id: "known_drug",
            score: 0.9949948615519757,
          },
          {
            id: "rna_expression",
            score: 0.19744986909916087,
          },
          {
            id: "affected_pathway",
            score: 0.9417342333554943,
          },
          {
            id: "literature",
            score: 0.9990551605907086,
          },
          {
            id: "genetic_association",
            score: 0.8593252168895935,
          },
          {
            id: "somatic_mutation",
            score: 0.9391180077635217,
          },
        ],
      },
    ],
    count: 10995,
  },
};

test("Sheet component renders with sample data", () => {
  render(<Sheet data={sampleData} />);

  // Check if the component renders the title
  const titleElement = screen.getByText("Genes associated with lung carcinoma");
  expect(titleElement).toBeInTheDocument();

  // Check if the component renders the table cells for sample data
  const rows = sampleData.associatedTargets.rows;
  rows.forEach((row) => {
    const approvedSymbolCell = screen.getByText(row.target.approvedSymbol);
    const geneNameCell = screen.getByText(row.target.approvedName);
    const scoreCell = screen.getByText(row.score.toFixed(3));

    expect(approvedSymbolCell).toBeInTheDocument();
    expect(geneNameCell).toBeInTheDocument();
    expect(scoreCell).toBeInTheDocument();
  });
});
