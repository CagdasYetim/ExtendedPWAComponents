import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaImageComponent } from './pwa-image.component';



@NgModule({
  declarations: [PwaImageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PwaImageComponent
  ]
})
export class PwaImageModule { }
