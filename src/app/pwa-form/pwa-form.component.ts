import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pwa-form',
  templateUrl: './pwa-form.component.html',
  styleUrls: ['./pwa-form.component.scss']
})
export class PwaFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  toSend !: boolean;

  @Input('formController') componentController !: {
    head?:string ,
    buttonName:string,
    buttonMethod() : any[],
    fields : {
      fieldName:string,
      label:string,
      isRequired:boolean,
      placeholder?:string,
      control:FormControl,
      errorMessage?:string,
      fieldType?:string
    }[]
  };

  @Output('result') resultEmitter = new EventEmitter<{fieldName:string,fieldValue:string}[]>();

  constructor() { }

  ngOnInit(): void {
    this.toSend = false;
  }

  clickButton (){
    let results :any[] = this.componentController.buttonMethod();
    this.resultEmitter.emit(results);
  }

}
