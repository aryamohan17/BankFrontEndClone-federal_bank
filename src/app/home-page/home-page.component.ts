import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  user:any
  constructor(private ds:DataService){
    this.user=this.ds.currentUser
  }

}
