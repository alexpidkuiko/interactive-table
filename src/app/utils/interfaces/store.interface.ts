import { IAddColumnActionData, IAddRowActionData } from './table.interface';

export interface AppState {
  table: TableState;
}

export interface TableState {
  tableColumns: IAddColumnActionData[];
  tableRows: IAddRowActionData[];
}
