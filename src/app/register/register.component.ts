import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService){}
  head="Your banking perfect patner"
  placeHolder1="Username"
  placeHolder2="Account number"

  register(){
    let user_data=this.ds.userDetails
    //  this using reason class inside
  }
}
