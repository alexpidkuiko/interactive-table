import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { IAddColumnActionData, IAddRowActionData } from '../../utils/interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent implements OnInit, OnChanges {
  @Input() public columnData: IAddColumnActionData[];
  @Input() public rowData: IAddRowActionData[];

  @Output() removeTableColumn: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeTableRow: EventEmitter<number> = new EventEmitter<number>();
  @Output() addTableColumn: EventEmitter<string> = new EventEmitter<string>();
  @Output() addTableRow: EventEmitter<any> = new EventEmitter<any>();

  public isShowAdditionalInfo: boolean;
  public sumAdditionalInfo: {[key: string]: number};
  public multiplicationAdditionalInfo: {[key: string]: number};

  constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.getSumForEachRowInColumn();
    this.getMultiplyForEachRowInColumn();
  }

  public ngOnInit(): void {}

  public emitRemoveColumn(index: number): void {
    this.removeTableColumn.emit(index);
  }

  public emitRemoveRow(index: number): void {
    this.removeTableRow.emit(index);
  }

  public emitAddColumn(data: string): void {
    this.addTableColumn.emit(data);
  }

  public emitAddRow(data: any): void {
    this.addTableRow.emit(data);
  }

  public showHideAdditionalInfo(): void {
    this.isShowAdditionalInfo = !this.isShowAdditionalInfo;
  }

  public trackByFn(index: number): number {
    return index;
  }

  private getSumForEachRowInColumn(): void {
    this.sumAdditionalInfo = this.columnData.reduce((obj, column) => {
      const { title } = column;
      obj[title] = this.getSumByColumn(title);
      return obj;
    }, {});
  }

  private getMultiplyForEachRowInColumn(): void {
    this.multiplicationAdditionalInfo = this.columnData.reduce((obj, column) => {
      const { title } = column;
      obj[title] = this.getMultiplyByColumn(title);
      return obj;
    }, {});
  }

  private getSumByColumn(column: string): number {
    let sum = 0;

    this.rowData.forEach((data) => {
      if (typeof data[column] === 'number') {
        sum += data[column];
      }
    });

    return sum;
  }

  private getMultiplyByColumn(column: string): number {
    let multiplication = 1;

    this.rowData.forEach((data) => {
      if (typeof data[column] === 'number') {
        multiplication *= data[column];
      }
    });

    return multiplication;
  }

}
