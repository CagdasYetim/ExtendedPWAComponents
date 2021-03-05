import { PwaHeaderComponent } from './pwa-header/pwa-header.component';
import { PwaHeaderModule } from './pwa-header/pwa-header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PwaHeaderModule,
    RouterModule.forRoot([
      { path: '', component: PwaHeaderComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
