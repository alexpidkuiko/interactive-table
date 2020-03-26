import { createSelector } from '@ngrx/store';
import { AppState } from '../../../utils/interfaces/store.interface';

export const selectOrder = (state: AppState) => state.table;

export const selectTableRowsData = createSelector(
  selectOrder,
  ({ tableRows }) => tableRows
);

export const selectTableColumnsData = createSelector(
  selectOrder,
  ({ tableColumns }) => tableColumns
);
