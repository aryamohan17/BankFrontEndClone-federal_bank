import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  user:any
  accno:any
  currentDate:any

 
  constructor(private ds:DataService,private fb:FormBuilder,private dr:Router){
    if(localStorage.getItem("currentUser")){
    this.user = JSON.parse(localStorage.getItem("currentUser")|| '')
    }
    // this.user=this.ds.currentUser
    // access the date using Date()
    this.currentDate=new Date()
  }
  ngOnInit():void{
    if(!localStorage.getItem("token")){
      alert("Please login")
      this.dr.navigateByUrl("login")
    }
  }
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  deposit(){
    var an = this.depositForm.value.acno
    var pwd =this.depositForm.value.pass
    var amount =this.depositForm.value.amt
    if(this.depositForm.valid){
      this.ds.deposit(an,pwd,amount).subscribe((result:any)=>{
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      })

  }
  else{
    alert("Please enter valid input in account number or password or amount")
  }
  }

  withdrawForm=this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pass:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })

  withdraw(){
    var an1 = this.withdrawForm.value.accno
    var pwd1 =this.withdrawForm.value.pass
    var amount1 =this.withdrawForm.value.amount
    if(this.withdrawForm.valid){
      this.ds.withdraw(an1,pwd1,amount1).subscribe((result:any)=>{
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      })

  }
  else
  {
    alert("your enter account number or password or amount is not valid!!!please enter valid input")
  }
  }
  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("token")
    this.dr.navigateByUrl("login")
  }
  deleteAcc(){
   this.accno= JSON.parse(localStorage.getItem("currentAcno")||"")
  }
  cancel(){
    this.accno=''
  }

  Delete(event:any){
    this.ds.deleteAccount(event).subscribe((result:any)=>{
      alert(result.message)
      this.logout()
    })
  }

}



































// DEPOSIT
// --------
// deposit(){
//   var an = this.depositForm.value.acno
//   var pwd =this.depositForm.value.pass
//   var amount =this.depositForm.value.amt
//   var ds_data = this.ds.deposit(an,pwd,amount)
//   if(this.depositForm.valid){
//   if(ds_data)
//   {
//     alert(`your account credited amount ${amount}.Your balance is ${ds_data}`)
//   }
//   else{
//     alert("Your account number or password incorrect")
//   }
// }
// else{
//   alert("Please enter valid input in account number or password or amount")
// }
// }

// WITHDRAW
// var an1 = this.withdrawForm.value.accno
// var pwd1 =this.withdrawForm.value.pass
// var amount1 =this.withdrawForm.value.amount
// var result = this.ds.withdraw(an1,pwd1,amount1)
// if(this.depositForm.valid){
// if(result)
// {
//   alert(`Your withraw amount is ${amount1}.Your balance is ${result}`)
// }
// else{
//   alert("Insufficient amount or password incoorect or account number invalid")
// }
// }
// else
// {
// alert("your enter account number or password or amount is not valid!!!please enter valid input")
// }
// }
