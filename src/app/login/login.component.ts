import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

 
// redirect to home page
  constructor(private route:Router,private ds:DataService,private fb:FormBuilder){}
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })
  login_(){
    var accountNumber = this.loginForm.value.acno
    var password = this.loginForm.value.psw

    // const result = this.ds.login(accountNumber,password)
    if(this.loginForm.valid){
    this.ds.login(accountNumber,password).subscribe((result:any)=>{
      localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
      localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
      localStorage.setItem("token",JSON.stringify(result.tocken))
      alert(result.message)
        this.route.navigateByUrl("home page")
    },
    result=>{

      alert(result.error.message)


    })

    // if(result){
    //   alert("LOgin sucessfully")
    //   this.route.navigateByUrl("home page")
    // }
    // else{
    //   alert("Register please or incorrect password")
    // }
  }
  else{
    alert("Invalid entires of accno and password")
  }
  }
}

  //method create after constructor and ngOnInit()
  // login(){
  //   alert("Login clicked")
  // }

   

      // using ngModels
     
   
   

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

    
  // acnoChange(event:any){
  //   //acno is declareed first,so that can be access using this keyword.
  //   this.acno=event.target.value; 
  //   console.log(this.acno);
  // }



