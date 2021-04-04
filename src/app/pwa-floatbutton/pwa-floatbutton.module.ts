import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaFloatbuttonComponent } from './pwa-floatbutton.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [PwaFloatbuttonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    PwaFloatbuttonComponent
  ]
})
export class PwaFloatbuttonModule { }
