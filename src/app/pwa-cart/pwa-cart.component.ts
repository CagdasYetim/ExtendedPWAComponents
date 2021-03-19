import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa-cart',
  templateUrl: './pwa-cart.component.html',
  styleUrls: ['./pwa-cart.component.scss']
})
export class PwaCartComponent implements OnInit {
  @Input('cartController') cartController !:
    {
      headerTitle:string,
      headerSubTitle?:string,
      avatarImage:string,
      cartImage?:string,
      content:string,
      buttons : {
        name?:string,
        icon?:string,
        buttonMethod() : any
      }[]
    };

  constructor() { }

  ngOnInit(): void {
  }

}
