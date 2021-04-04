import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pwa-image',
  templateUrl: './pwa-image.component.html',
  styleUrls: ['./pwa-image.component.scss']
})
export class PwaImageComponent implements OnInit,OnDestroy {

  @Input('imgController') imgController !:{
    src : string
    height?:string,
    width?:string
  };
  innerWidth : any;
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    /* this.imgController = {
      src : "../../assets/asd.jpg",
      height : "auto",
      width : "5rem"
    }; */

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.innerWidth = window.innerWidth;
    });
  }

  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe();
  }

}
