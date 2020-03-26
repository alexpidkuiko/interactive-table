import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableActionsBarModule } from './components/table-actions-bar/table-actions-bar.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TableActionsBarModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
