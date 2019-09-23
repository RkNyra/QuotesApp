import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote("", "", "", new Date, 0, 0)
  @Output() showForm = new EventEmitter<boolean>();
  @Output() emitNewQuote = new EventEmitter<any>();
  @Output() addQuote = new EventEmitter<Quote>();

quotes: Quote [] = [];

  constructor() { }

  ngOnInit() {

}
submitQuote(){
  console.log(this.newQuote)
  this.showForm.emit();
  this.emitNewQuote.emit(this.newQuote);
  this.addQuote.emit(this.newQuote);
  // console.log(this.addQuote.emit(this.newQuote));
  
}
}

