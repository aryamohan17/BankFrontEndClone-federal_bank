import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
transactionData:any
constructor(private ds:DataService){
  this.transactionData=this.ds.transaction(this.ds.currentAcno)
  console.log(this.transactionData);
}
}
