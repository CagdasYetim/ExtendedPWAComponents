import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa-header',
  templateUrl: './pwa-header.component.html',
  styleUrls: ['./pwa-header.component.scss']
})
export class PwaHeaderComponent implements OnInit {

  @Input('navItems') navItems !: {name:string, url?:string}[];

  constructor() { }

  ngOnInit(): void {
  }

}
