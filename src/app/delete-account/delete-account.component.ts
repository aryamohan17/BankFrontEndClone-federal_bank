import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  @Input() parentAccno:String | undefined

  @Output() oncancel=new EventEmitter()

  onCancel(){
    this.oncancel.emit()
  }
}
