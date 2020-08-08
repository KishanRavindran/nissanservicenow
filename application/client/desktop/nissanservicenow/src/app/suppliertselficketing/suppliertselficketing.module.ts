import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuppliertselficketingComponent } from './suppliertselficketing.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule
],
  declarations: [
  SuppliertselficketingComponent
]
  
})
export class SuppliertselficketingModule { }