import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ExtendedPWAComponents';
  items: {name:string,url?:string}[] = [];

  ngOnInit(): void {
    this.items.push({name:"test",url:"/test"});
  }


}
