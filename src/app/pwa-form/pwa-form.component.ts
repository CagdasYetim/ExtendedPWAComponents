import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pwa-form',
  templateUrl: './pwa-form.component.html',
  styleUrls: ['./pwa-form.component.scss']
})
export class PwaFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  results : {fieldName:string,fieldValue:any}[] =[];
  toSend !: boolean;

  @Input('formController') componentController !: {
    head?:string ,
    buttonName:string,
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

  @Output('result') resultEmitter = new EventEmitter<{fieldName:string,fieldValue:any}[]>();

  constructor() { }

  ngOnInit(): void {
    this.toSend = false;
  }

  clickButton (){
    this.componentController.fields.forEach(e => {
      if(!e.control.invalid){
        this.results.push({fieldName:e.fieldName ,fieldValue: e.control.value});
        this.toSend = true;
      }
      else
        this.toSend = false;
    });
    if(this.toSend){
      this.resultEmitter.emit(this.results);
    }
  }

}
