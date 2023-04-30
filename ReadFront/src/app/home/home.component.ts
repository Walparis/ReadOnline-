import { Component } from '@angular/core';
import { Book} from "../../interfaces/interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Book[] = [];
  book1: Book = {
    id : '1',
    image : "https://i.dummyjson.com/data/products/1/4.jpg",
    name : "b1",
    author : "a1",
    genre : "g1",
    description : "cakbhkcbakcbdkbc",
    likes : 0,
    cost : 250000
  };
  constructor() {
    this.books.push(this.book1);
  }
}

