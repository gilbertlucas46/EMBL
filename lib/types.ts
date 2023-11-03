export interface RowData {
  target: {
    approvedSymbol: string;
    approvedName: string;
  };
  score: number;
}

export interface RowProps {
  row: RowData;
}

export interface SheetProps {
  data: {
    associatedTargets: {
      rows: RowData[];
    };
  };
}
