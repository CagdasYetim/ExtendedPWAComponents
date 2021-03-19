import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaFormComponent } from './pwa-form.component';



@NgModule({
  declarations: [PwaFormComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports : [
    PwaFormComponent
  ]
})
export class PwaFormModule { }
