import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
    this.getData()
   }
  // userDetails:any={
  //   1000:{accno:1000,username:"akku",password:"akku1",balance:0,transaction:[]},
  //   1001:{accno:1001,username:"ammu",password:"ammu1",balance:1000,transaction:[]},
  //   1002:{accno:1002,username:"sree",password:"sree1",balance:1000,transaction:[]},
  //   1003:{accno:1003,username:"kavi",password:"kavi1",balance:1000,transaction:[]},
  //   1004:{accno:1004,username:"panju",password:"panju1",balance:1000,transaction:[]}
  // }
  currentUser:any
  currentAcno:any
  userDetails:any
  // data can be added only this service file
  saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
    }
    if(this.currentAcno){
      localStorage.setItem("currentAccountNum",JSON.stringify(this.currentAcno))
    }
  }

  getData(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') ||"")
    }
    if(localStorage.getItem('currentUser')){
      this.currentUser=localStorage.getItem('currentUser')
    }
    if(localStorage.getItem('currentAccountNum')){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAccountNum')||"")
    }
  }

  register(uName:any,Accno:any,pass:any){
    // var userData=this.userDetails
    if(Accno in this.userDetails){
      return false;
    }
    else{
      this.userDetails[Accno]={accno:Accno,username:uName,password:pass,balance:0,transaction:[]}
      // console.log(userData);
      this.saveData();
      return true
    }
  }

  login(acno:any,pass:any){

    // var userData=this.userDetails
    if(acno in this.userDetails)
    {
      if(pass == this.userDetails[acno]["password"]){
        this.currentUser=this.userDetails[acno]["username"]
        this.currentAcno=acno
        this.saveData()
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
  deposit(acno:any,pass:any,amnt:any)
  {
    // let userData=this.userDetails
    var amt=parseInt(amnt)
    if(acno in this.userDetails)
    {
      if(pass==this.userDetails[acno]["password"]){
        this.userDetails[acno]["balance"]+=amt
        this.userDetails[acno]["transaction"].push({Type:"credit",Amount:amnt})
        this.saveData()
        return this.userDetails[acno]["balance"]
      }
      else
      {
        return false

      }
    }
    else{
      return false
    }
  }

  withdraw(acno:any,pass:any,amount:any)
  {
    var amt = parseInt(amount)
    // var userData= this.userDetails
    if(acno in this.userDetails){
      if(pass==this.userDetails[acno]["password"]){
        if(amt<this.userDetails[acno]["balance"]){
          this.userDetails[acno]["balance"]-=amt
          this.userDetails[acno]["transaction"].push({Type:"Debit",Amount:amount})
          // console.log(userData);
          this.saveData()
          return this.userDetails[acno]["balance"]
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

  transaction(accno:any){
    return this.userDetails[accno]["transaction"]
  }

}
