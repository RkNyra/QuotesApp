import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

import { DateCountPipe} from '../date-count.pipe'
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css'],
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quote : Quote

  @Output() emitupVote = new EventEmitter<any>();
  @Output() emitdownVote = new EventEmitter<any>();
  @Output() isHide = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    DateCountPipe
  }

  downVote(quote){
    this.emitdownVote.emit(quote);
  }

  upVote(quote){
    this.emitupVote.emit(quote);
  }
  quoteDelete(Hide: boolean){
    this.isHide.emit(Hide);
    console.log(Hide);
}
}

