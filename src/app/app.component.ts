import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ExtendedPWAComponents';
  items: {name:string,url?:string}[] = [];

  componentController !: {
    head?:string ,
    buttonName:string,
    fields : {
      fieldName:string,
      label:string,
      isRequired:boolean,
      placeholder?:string,
      control:FormControl,
      errorMessage?:string,
      fieldType?:string;
    }[]
  }

  ngOnInit(): void {
    this.items.push({name:"test",url:"/test"});

    this.componentController = {
      head : "Cagdas" ,
      buttonName : "Register",
      fields : [
        {fieldName:"first" , label:"FirstLabel", isRequired:true,control : new FormControl('',[Validators.email]),errorMessage:"testError",fieldType:"password"}
        ,{fieldName:"Second" , label:"SecondLabel", isRequired:true,control : new FormControl('',Validators.required),errorMessage:"testErrorSecond"}
      ]
    }
  }

  getResult(object :{fieldName:string,fieldValue:string}[] ){
    console.log(object);
  }

}
