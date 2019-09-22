import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  @Output() showForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {

}
submitQuote(){
  this.showForm.emit();
}
}
