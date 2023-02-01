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
}
