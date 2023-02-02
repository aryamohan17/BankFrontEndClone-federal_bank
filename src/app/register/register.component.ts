import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService,private rou:Router){}
  head="Your banking perfect patner"
  placeHolder1="Username"
  placeHolder2="Account number"

  uname=''
  accno=''
  pwd=''
  register(){

    var userName = this.uname
    var accountNum = this.accno
    var password = this.pwd

    const result=this.ds.register(userName,accountNum,password)
    if(result)
    {
      alert("registered")
      this.rou.navigateByUrl("");
    }
    else{
      alert('Already register')
    }
  }
}
