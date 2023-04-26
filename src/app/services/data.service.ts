import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// generate overload globally
const option={
  // let header = new HttpHeaders()     // inside a class using this code
  // out
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor( private http:HttpClient) {
    // this.getData()
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

  // getData(){
  //   if(localStorage.getItem('database')){
  //     this.userDetails=JSON.parse(localStorage.getItem('database') ||"")
  //   }
  //   if(localStorage.getItem('currentUser')){
  //     this.currentUser=localStorage.getItem('currentUser')
  //   }
  //   if(localStorage.getItem('currentAccountNum')){
  //     this.currentAcno=JSON.parse(localStorage.getItem('currentAccountNum')||"")
  //   }
  // }
  getTocken(){
    // access tocken
    const token = JSON.parse(localStorage.getItem("token")||"")
    // generate header
    let headers = new HttpHeaders()

    if(token){
      // append token in header
      // header.append("access_tocken",token)

      // overloading
     option.headers= headers.append("access_tocken",token)
    }
    return option
  }

  register(uName:any,Accno:any,pass:any){
    // create body data
    const data ={uName,Accno,pass}
    return this.http.post("http://localhost:3000/register",data)
  }

  login(acno:any,pass:any){

    const data = {Accno:acno,pass}
    return this.http.post("http://localhost:3000/login",data)
  
  }

  deposit(acno:any,pass:any,amnt:any)
  {
    // let userData=this.userDetails
    const data ={acc:acno,pass,amnt}
    return this.http.post("http://localhost:3000/deposit",data,this.getTocken())
  }

  withdraw(acno:any,pass:any,amount:any)
  {
    const data = {acc:acno,pass,amnt:amount}
    return this.http.post("http://localhost:3000/withdraw",data,this.getTocken())
  }

  transaction(accno:any){
    const data ={acc:accno}
    return this.http.post("http://localhost:3000/transaction",data,this.getTocken())

  }

  deleteAccount(accno:any){
    return this.http.delete('http://localhost:3000/delete/'+accno,this.getTocken())
  }

}


// Register
// --------------
    // var userData=this.userDetails
    // if(Accno in this.userDetails){
    //   return false;
    // }
    // else{
    //   this.userDetails[Accno]={accno:Accno,username:uName,password:pass,balance:0,transaction:[]}
    //   // console.log(userData);
    //   this.saveData();
    //   return true
    // }
    // LOGIN
    // ---------
    // {
    //   if(pass == this.userDetails[acno]["password"]){
    //     this.currentUser=this.userDetails[acno]["username"]
    //     this.currentAcno=acno
    //     this.saveData()
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // }
    // else{
    //   return false
    // }

    // DEPOSIT
    // -------
    // deposit(acno:any,pass:any,amnt:any)
    // {
    //   // let userData=this.userDetails
    //   var amt=parseInt(amnt)
    //   if(acno in this.userDetails)
    //   {
    //     if(pass==this.userDetails[acno]["password"]){
    //       this.userDetails[acno]["balance"]+=amt
    //       this.userDetails[acno]["transaction"].push({Type:"credit",Amount:amnt})
    //       this.saveData()
    //       return this.userDetails[acno]["balance"]
    //     }
    //     else
    //     {
    //       return false
  
    //     }
    //   }
    //   else{
    //     return false
    //   }
    // }

    // WITHDRAW
    // withdraw(acno:any,pass:any,amount:any)
    // {
    //   var amt = parseInt(amount)
    //   // var userData= this.userDetails
    //   if(acno in this.userDetails){
    //     if(pass==this.userDetails[acno]["password"]){
    //       if(amt<this.userDetails[acno]["balance"]){
    //         this.userDetails[acno]["balance"]-=amt
    //         this.userDetails[acno]["transaction"].push({Type:"Debit",Amount:amount})
    //         // console.log(userData);
    //         this.saveData()
    //         return this.userDetails[acno]["balance"]
    //       }
    //       else{
    //         return false
    //       }
    //     }
    //     else{
    //       return false
    //     }
    //   }
    //   else{
    //     return false
    //   }
    // }

    // TRANSACTION
    // transaction(accno:any){
    //   return this.userDetails[accno]["transaction"]
    // }