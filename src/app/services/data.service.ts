import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  userDetails:any={
    1000:{accno:1000,username:"akku",password:"akku1",balance:0},
    1001:{accno:1001,username:"ammu",password:"ammu1",balance:1000},
    1002:{accno:1002,username:"sree",password:"sree1",balance:1000},
    1003:{accno:1003,username:"kavi",password:"kavi1",balance:1000},
    1004:{accno:1004,username:"panju",password:"panju1",balance:1000},
  }
  currentUser:any
  // data can be added only this service file
  register(uName:any,Accno:any,pass:any){
    var userData=this.userDetails
    if(Accno in userData){
      return false;
    }
    else{
      userData[Accno]={accno:Accno,username:uName,password:pass}
      console.log(userData);
      
      return true
    }
  }

  login(acno:any,pass:any){
    var userData=this.userDetails
    if(acno in userData)
    {
      if(pass ==userData[acno]["password"]){
        this.currentUser=userData[acno]["username"]
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
    let userData=this.userDetails
    var amt=parseInt(amnt)
    if(acno in userData)
    {
      if(pass==userData[acno]["password"]){
        userData[acno]["balance"]+=amt
        return userData[acno]["balance"]
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
    var userData= this.userDetails
    if(acno in userData){
      if(pass==userData[acno]["password"]){
        if(amt<userData[acno]["balance"]){
          userData[acno]["balance"]-=amt
          return userData[acno]["balance"]
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
}
