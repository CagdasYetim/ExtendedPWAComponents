import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaCartComponent } from './pwa-cart.component';
import { MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [PwaCartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    PwaCartComponent
  ]
})
export class PwaCartModule { }
