import { TableState } from '../../../utils/interfaces/store.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addColumnAction, addRowAction, removeColumnAction, removeRowAction } from '../../actions/table/table.actions';
import { mockColumnData, mockRowData } from '../../../utils/mock/mock-store-data';

const initialState: TableState = {
  tableColumns: mockColumnData,
  tableRows: mockRowData,
};

export const tableReducerImplicit = createReducer(
  initialState,
  on(addRowAction, (state, { data }) => ({ ...state, tableRows: [...state.tableRows, data] })),
  on(removeRowAction, (state, {id}) => ({
    ...state,
    tableRows: [...state.tableRows.filter((elem, index) => index !== id)]
  })),
  on(addColumnAction, (state, {title}) => ({ ...state, tableColumns: [...state.tableColumns, {title}]})),
  on(removeColumnAction, (state, {id}) => ({
    ...state,
    tableColumns: [...state.tableColumns.filter((elem, index) => index !== id)]
  }))
);

export function tableReducer(state: any, action: Action) {
  return tableReducerImplicit(state, action);
}
