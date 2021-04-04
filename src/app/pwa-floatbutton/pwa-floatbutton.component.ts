import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pwa-floatbutton',
  templateUrl: './pwa-floatbutton.component.html',
  styleUrls: ['./pwa-floatbutton.component.scss']
})
export class PwaFloatbuttonComponent implements OnInit {

  @Input("floatStyle") floatStyle !: {};

  PLUS_ICON = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <title>plus</title>
    <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
    </svg>
  `;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ){
    iconRegistry.addSvgIconLiteral('plus-icon', sanitizer.bypassSecurityTrustHtml(this.PLUS_ICON));
  }

  ngOnInit(): void {

  }

}
