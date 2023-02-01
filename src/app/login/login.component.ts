import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// userDetails is a object variable ,any means any variable access is a datatype.
head="Your perfect banking partner"
// property binding
placeHolder="Account number"
accno=''
psw=''
 
// redirect to home page
  constructor(private route:Router,private ds:DataService){}


  //method create after constructor and ngOnInit()
  // login(){
  //   alert("Login clicked")
  // }

    login(){

      // using ngModels
      var accountNumber = this.accno
      var password = this.psw
      var userData= this.ds.userDetails

      if(accountNumber in userData)
      {
        if(password ==userData[accountNumber]["password"]){
          alert("Password correct")
          this.route.navigateByUrl('home page')
          //this home page path from app-routing.module.ts
        }
        else{
          alert("password incorrect")
        }
      }
      else{
        alert("Please register ! Account number incorrect")
      }

      // USING TEMPLATE RENDERING

      // var acc_num = acc.value
      // var acc_psw = pass.value
      // var user_data=this.userDetails
      // if(acc_num in user_data)
      // {
      //   if(acc_psw==user_data[acc_num]["password"]){
      //     alert("login sucessfully")
      //   }
      //   else{
      //     alert("Password incorrect")
      //   }
      // }
      // else{
      //   alert("Account not valid!please register")
      // }

      // var accountNumber = this.accno
      // var password = this.psw
      // var userData= this.userDetails

      // if(accountNumber in userData)
      // {
      //   if(password ==userData[accountNumber]["password"]){
      //     alert("Password correct")
      //   }
      //   else{
      //     alert("password incorrect")
      //   }
      // }
      // else{
      //   alert("Please register ! Account number incorrect")
      // }

    }
  // acnoChange(event:any){
  //   //acno is declareed first,so that can be access using this keyword.
  //   this.acno=event.target.value; 
  //   console.log(this.acno);
  // }


}
