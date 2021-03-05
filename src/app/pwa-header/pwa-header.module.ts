import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaHeaderComponent } from './pwa-header.component';



@NgModule({
  declarations: [PwaHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PwaHeaderComponent
  ]
})
export class PwaHeaderModule { }
