import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-pwa-autoinput',
  templateUrl: './pwa-autoinput.component.html',
  styleUrls: ['./pwa-autoinput.component.scss']
})
export class PwaAutoinputComponent implements OnInit {

  @Input("list") list !: string[];
  @Input("placeholder") placeholder !:string;
  @Input("label") label !:string;
  @Output("result") result = new EventEmitter<string>();

  control = new FormControl();
  toList!: string[] ;
  filteredToList!: Observable<string[]>;

  ngOnInit() {
    this.toList = this.list ? this.list : ['cagdas', 'havva'];
    this.filteredToList = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = this.normalizeValue(value);
    return this.toList.filter(l => this.normalizeValue(l).includes(filterValue));
  }

  private normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  clickButton(){
    this.result.emit(this.control.value);
  }

}
