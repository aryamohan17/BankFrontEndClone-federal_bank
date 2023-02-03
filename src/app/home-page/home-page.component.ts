import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  user:any

  accno:any
  pass:any
  amt:any

  accno1:any
  pass1:any 
  amt1:any
  constructor(private ds:DataService){
    this.user=this.ds.currentUser
  }
  deposit(){
    var an = this.accno
    var pwd =this.pass
    var amount =this.amt
    var ds_data = this.ds.deposit(an,pwd,amount)
    if(ds_data)
    {
      alert(`your account credited amount ${amount}.Your balance is ${ds_data}`)
    }
    else{
      alert("Your account number or password incorrect")
    }

  }
  withdraw(){
    var an1 = this.accno1
    var pwd1 =this.pass1
    var amount1 =this.amt1
    var result = this.ds.withdraw(an1,pwd1,amount1)
    if(result)
    {
      alert(`Your withraw amount is ${amount1}.Your balance is ${result}`)
    }
    else{
      alert("Insufficient amount or password incoorect or account number invalid")
    }
  }

}
