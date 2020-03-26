import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './utils/interfaces/store.interface';
import { selectTableColumnsData, selectTableRowsData } from './store/selectors/table/table.selector';
import { Observable } from 'rxjs';
import { IAddColumnActionData, IAddRowActionData } from './utils/interfaces/table.interface';
import { addColumnAction, addRowAction, removeColumnAction, removeRowAction } from './store/actions/table/table.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public rowData$: Observable<IAddRowActionData[]> = this.store.select(selectTableRowsData);
  public columnData$: Observable<IAddColumnActionData[]> = this.store.select(selectTableColumnsData);

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {}

  public removeTableRow(id: number): void {
    this.store.dispatch(removeRowAction({id}));
  }

  public removeTableColumn(id: number): void {
    this.store.dispatch(removeColumnAction({id}));
  }

  public addTableRow(data): void {
    this.store.dispatch(addRowAction({data}));
  }

  public addTableColumn(title: string): void {
    this.store.dispatch(addColumnAction({title}));
  }
}
