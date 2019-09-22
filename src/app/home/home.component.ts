import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
}
