export interface Target {
  id: string;
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
  datatypeScores: DatatypeScores[]; // Use an array for datatypeScores
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

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  data: number[]; // or string[] if your data is represented as strings
  backgroundColor: string;
  borderWidth: number;
}
