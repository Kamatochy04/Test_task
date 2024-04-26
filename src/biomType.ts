// export type Root = {
//   id: string;
//   format: string;
//   format_url: string;
//   matrix_type: string;
//   generated_by: string;
//   date: string;
//   type: string;
//   matrix_element_type: string;
//   shape: number[];
//   data: number[][];
//   rows: Row[];
//   columns: Column[];
//   metadata: Metadata2;
// };

// type Row = {
//   id: string;
//   metadata: Metadata;
// };

// type Metadata = {
//   taxonomy: string[];
//   tax_id: number;
//   title: string;
//   lineage: Lineage[];
//   id: string;
//   assembly?: string;
// };

// type Lineage = {
//   rank: string;
//   name: string;
//   tax_id: number;
// };

// type Column = {
//   id: string;
//   metadata: any;
// };

// type Metadata2 = {
//   analysis_id: string;
//   name: string;
//   database: string;
//   created: string;
//   database_feature: string;
//   biom_version: number;
//   filterset_name: string;
//   filterset_id: string;
// };

export interface Root {
  id: string;
  format: string;
  format_url: string;
  matrix_type: string;
  generated_by: string;
  date: string;
  type: string;
  matrix_element_type: string;
  shape: number[];
  data: number[][];
  rows: Row[];
  columns: Column[];
  metadata: Metadata2;
}

export interface Row {
  id: string;
  metadata: Metadata;
}

export interface Metadata {
  taxonomy: string[];
  tax_id: number;
  title: string;
  lineage: Lineage[];
  id: string;
  assembly?: string;
}

export interface Lineage {
  rank: string;
  name: string;
  tax_id: number;
}

export interface Column {
  id: string;
  metadata: any;
}

export interface Metadata2 {
  analysis_id: string;
  name: string;
  database: string;
  created: string;
  database_feature: string;
  biom_version: number;
  filterset_name: string;
  filterset_id: string;
}

export interface MainData {
  metadata: Metadata;
  data: number[][];
}
