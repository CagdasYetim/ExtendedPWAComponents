import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaAutoinputComponent } from './pwa-autoinput.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [PwaAutoinputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule
  ],
  exports : [
    PwaAutoinputComponent
  ]
})
export class PwaAutoinputModule { }
