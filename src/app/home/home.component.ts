import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes: Quote[] = [
    {quote:'They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.',author:'Tom Bodett',submittedBy:'Stl SuperG', date: new Date(2019,8,14),  upvote: 0, downvote: 0},
    {quote:'Wine is constant proof that God loves us and loves to see us happy.',author:'Benjamin Franklin',submittedBy:'RK Nyra', date: new Date(2019,5,14),  upvote: 0, downvote: 0},
    {quote:'If you think women are the weaker sex, try pulling the blanket back to your side',author:'Stuart Turner',submittedBy:'Judd Knight', date: new Date(2019,7,14), upvote: 0, downvote: 0},

  ];
  counter:number=0;

  showForm: boolean = false

  constructor() { }

  ngOnInit() {
  }

  addQuote(){
    this.showForm = true
  }
  hideForm(){
    this.showForm = false
  }
  submitData(quote){
    console.log(quote);
    quote.upvote = 0;
    quote.downvote = 0;
    quote.date = new Date;
    this.quotes.push(quote)
    console.log(quote.quote)
  }
  downVote(quote){
    quote.downvote +=1;
    console.log(quote);

  }
  upVote(quote){
  quote.upvote +=1;
    console.log(quote);
    
 }
 deleteQuote(isHide,index){
   if(isHide){
    //  let toDelete = confirm (`Are you sure you want to delete ${this.quotes[index].quote}?`)
    let toDelete = confirm (`Are you sure you want to delete this quote?`)
     if(toDelete){
       this.quotes.splice(index, 1);
       }
   }
 }
}
