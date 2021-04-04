import { PwaFloatbuttonModule } from './pwa-floatbutton/pwa-floatbutton.module';
import { PwaAutoinputModule } from './pwa-autoinput/pwa-autoinput.module';
import { PwaCheckboxesModule } from './pwa-checkboxes/pwa-checkboxes.module';
import { PwaImageModule } from './pwa-image/pwa-image.module';
import { PwaCartModule } from './pwa-cart/pwa-cart.module';
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
    PwaCartModule,
    PwaImageModule,
    PwaCheckboxesModule,
    PwaAutoinputModule,
    MatSliderModule,
    PwaFloatbuttonModule,
    RouterModule.forRoot([
      { path: '', component: PwaHeaderComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
