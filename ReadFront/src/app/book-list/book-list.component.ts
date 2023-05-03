import {Component, OnInit} from '@angular/core';
import { Book } from '../../interfaces/interface';
import {books} from "../fakedb";
import {HttpClient} from "@angular/common/http";
import {BooksService} from "../books.service";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books : Book[] = books;

  constructor(private client: HttpClient, private booksService: BooksService) {};

  ngOnInit(){
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
    })
  }



}
