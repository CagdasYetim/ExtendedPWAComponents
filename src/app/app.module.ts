import { PwaFormModule } from './pwa-form/pwa-form.module';
import { PwaHeaderComponent } from './pwa-header/pwa-header.component';
import { PwaHeaderModule } from './pwa-header/pwa-header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PwaHeaderModule,
    PwaFormModule,
    MatSliderModule,
    RouterModule.forRoot([
      { path: '', component: PwaHeaderComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
