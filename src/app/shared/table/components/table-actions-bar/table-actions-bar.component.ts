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
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddColumnActionData } from '../../../../utils/interfaces/table.interface';

@Component({
  selector: 'app-table-actions-bar',
  templateUrl: './table-actions-bar.component.html',
  styleUrls: ['./table-actions-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableActionsBarComponent implements OnInit, OnChanges {
  @Input() public columnData: IAddColumnActionData[];

  @Output() addTableColumn: EventEmitter<string> = new EventEmitter<string>();
  @Output() addTableRow: EventEmitter<any> = new EventEmitter<any>();

  public isShowAdditionalMenuForAddRow = false;
  public isShowAdditionalMenuForAddColumn = false;
  public tableActionFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
  }

  public ngOnInit(): void {
  }

  public showAdditionalMenuForAddRow(): void {
    this.isShowAdditionalMenuForAddRow = true;
    this.isShowAdditionalMenuForAddColumn = false;
    this.tableActionFormGroup.reset();
  }

  public showAdditionalMenuForAddColumn(): void {
    this.isShowAdditionalMenuForAddRow = false;
    this.isShowAdditionalMenuForAddColumn = true;
    this.tableActionFormGroup.reset();
  }

  public addRow(): void {
    const { columnName, ...rowData } = this.tableActionFormGroup.value;

    this.addTableRow.emit(rowData);
  }

  public addColumn(): void {
    const { columnName } = this.tableActionFormGroup.value;

    this.addTableColumn.emit(columnName);
  }

  public cancel(): void {
    this.isShowAdditionalMenuForAddRow = false;
    this.isShowAdditionalMenuForAddColumn = false;
  }

  private initForm(): void {
    this.tableActionFormGroup = this.fb.group({
      columnName: ['', []]
    });
    this.columnData.forEach(({title}, index) => {
      this.tableActionFormGroup.addControl(title + index, new FormControl('', [Validators.required]));
    });
  }

}
