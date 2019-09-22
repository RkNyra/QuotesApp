import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {

quotes:Quote[] = [
    {quote:'They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.',author:'Tom Bodett',submittedBy:'Stl SuperG'},
    {quote:'Wine is constant proof that God loves us and loves to see us happy.',author:'Benjamin Franklin',submittedBy:'RK Nyra'},
    {quote:'If you think women are the weaker sex, try pulling the blanket back to your side',author:'Stuart Turner',submittedBy:'Judd Knight'},
    {quote:'Have you noticed that all the people in favor of birth control are already born?',author:'Benny Hill',submittedBy:'Lisa Kempton'},
    {quote:'Have you noticed that all the people in favor of birth control are already born?',author:'Benny Hill',submittedBy:'Lisa Kempton'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
