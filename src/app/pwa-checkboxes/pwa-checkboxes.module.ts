import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaCheckboxesComponent } from './pwa-checkboxes.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PwaCheckboxesComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports:[
    PwaCheckboxesComponent
  ]
})
export class PwaCheckboxesModule { }
