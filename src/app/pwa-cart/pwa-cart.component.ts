import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa-cart',
  templateUrl: './pwa-cart.component.html',
  styleUrls: ['./pwa-cart.component.scss']
})
export class PwaCartComponent implements OnInit {
  @Input('testSrc') testSrc !:string;

  constructor() { }

  ngOnInit(): void {
  }

}
