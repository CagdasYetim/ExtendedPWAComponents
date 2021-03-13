import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PwaHeaderComponent } from './pwa-header.component';



@NgModule({
  declarations: [PwaHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PwaHeaderComponent
  ]
})
export class PwaHeaderModule { }
