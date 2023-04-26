import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService,private rou:Router,private fb:FormBuilder){}
  head="Your banking perfect partner"
  placeHolder1="Username"
  placeHolder2="Account number"

 

  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })

  register(){

    var userName = this.registerForm.value.uname
    var accountNum = this.registerForm.value.acno
    var password = this.registerForm.value.psw
    if(this.registerForm.valid){

   
    this.ds.register(userName,accountNum,password).subscribe((result:any)=>{
      alert(result.message)
      this.rou.navigateByUrl("login")
    },
    result=>{
      alert(result.error.message)
      
    })
    
  
  }
  else
  {
    alert("invalid entries or please fill the field.....")
  }
}
}
// const result=this.ds.register(userName,accountNum,password)
// if(result)
// {
//   alert("registered")
//   this.rou.navigateByUrl("");
// }
// else{
//   alert('Already register')
// }