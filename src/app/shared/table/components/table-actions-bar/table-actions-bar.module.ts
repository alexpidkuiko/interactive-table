import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionsBarComponent } from './table-actions-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TableActionsBarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableActionsBarComponent
  ]
})
export class TableActionsBarModule { }
