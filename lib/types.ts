export interface Target {
  approvedSymbol: string;
  approvedName: string;
}

export interface DatatypeScores {
  id: string;
  score: number;
}

export interface RowData {
  target: Target;
  score: number;
  datatypeScores: DatatypeScores;
}

export interface AssociatedTargetsData {
  rows: RowData[];
}

export interface SheetData {
  associatedTargets: AssociatedTargetsData;
}

export interface RowProps {
  row: RowData;
}

export interface SheetProps {
  data: SheetData;
}
