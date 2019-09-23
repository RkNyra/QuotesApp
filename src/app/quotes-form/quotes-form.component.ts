import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  @Output() showForm = new EventEmitter<boolean>();
  @Output() emitNewQuote = new EventEmitter<any>();

quotes: Quote [] = [];

  constructor() { }

  ngOnInit() {

}
submitQuote(){
  this.showForm.emit();
  this.emitNewQuote.emit(this.quotes);
}
}
