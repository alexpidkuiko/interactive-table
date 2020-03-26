import { createAction, props } from '@ngrx/store';
import {
  IAddColumnActionData,
  IAddRowActionData,
  IRemoveColumnActionData,
  IRemoveRowActionData
} from '../../../utils/interfaces/table.interface';


export enum TableActionTypes {
  ADD_ROW = '[TABLE] ADD_ROW',
  REMOVE_ROW = '[TABLE] REMOVE_ROW',
  ADD_COLUMN = '[TABLE] ADD_COLUMN',
  REMOVE_COLUMN = '[TABLE] REMOVE_COLUMN',
}

export const addRowAction = createAction(
  TableActionTypes.ADD_ROW,
  props<IAddRowActionData>()
);
export const removeRowAction = createAction(
  TableActionTypes.REMOVE_ROW,
  props<IRemoveRowActionData>()
);
export const addColumnAction = createAction(
  TableActionTypes.ADD_COLUMN,
  props<IAddColumnActionData>()
);
export const removeColumnAction = createAction(
  TableActionTypes.REMOVE_COLUMN,
  props<IRemoveColumnActionData>()
);
