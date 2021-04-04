import { ThemePalette } from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ExtendedPWAComponents';
  items: {name:string,url?:string}[] = [];

  task !: Task;

  componentController !: {
    head?:string ,
    buttonName:string,
    buttonMethod():any[],
    fields : {
      fieldName:string,
      label:string,
      isRequired:boolean,
      placeholder?:string,
      control:FormControl,
      errorMessage?:string,
      fieldType?:string;
    }[],
    links?:{
      url:string,
      linkName:string,
      color?:string
    }[]
  }

  cartController !:
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

  ngOnInit(): void {
    this.items.push({name:"test",url:"/test"});

    this.componentController = {
      head : "Cagdas" ,
      buttonName : "Register",
      buttonMethod : function():any[]{
        let results:{fieldName:string,fieldValue:string}[] =[];
        for(var i in this.fields){
          if(!this.fields[i].control.invalid){
            results.push({fieldName:this.fields[i].fieldName ,fieldValue: this.fields[i].control.value});
          }
          else{
            return [];
          }
        }
        return results;
      },
      fields : [
        {fieldName:"first" , label:"FirstLabel", isRequired:true,control : new FormControl(''),errorMessage:"testError",fieldType:"password"}
        ,{fieldName:"Second" , label:"SecondLabel", isRequired:true,control : new FormControl('',Validators.required),errorMessage:"testErrorSecond"}
      ],
    links:[{
      url:"/",
      linkName:"Register",
      color:"red"
    }]
    };
    this.cartController = {
      headerTitle:"CartTitle",
      avatarImage:"../../assets/asd.jpg",
      headerSubTitle : "this is a fucking sub title",
      content : "this is a abuk sabuk content this is a abuk sabuk content this is a abuk sabuk content this is a abuk sabuk content",
      buttons : [
        {
          icon : "favorite",
          buttonMethod : ()=>{console.log("cagdas Yapar olum");}
        }
      ]
    };

    this.task = {
      name: 'Indeterminate',
      completed: false,
      color: 'primary',
      subtasks: [
        {name: 'Primary', completed: false, color: 'primary'},
        {name: 'Accent', completed: false, color: 'accent'},
        {name: 'Warn', completed: false, color: 'warn'}
      ]
    };
  }

  getResult(object :any[] ){
    if(object){
      object.forEach(e =>{
        console.log(e.fieldValue);
      });
    }
  }

  testCheckbox(){
    console.log(this.task);
  }

}
