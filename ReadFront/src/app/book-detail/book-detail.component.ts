import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../interfaces/interface";
import {ActivatedRoute} from "@angular/router";
import {BookListComponent} from "../book-list/book-list.component";
import {books} from "../fakedb";
import {BooksService} from "../books.service"
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book : Book;
  public id: string | null;
  loaded: boolean;
  ReturnBack(){
    window.location.href = `http://localhost:4200/home`;
  }

  constructor(private route: ActivatedRoute, private bookService: BooksService) {
    this.loaded = true;
    this.id = this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        // this.bookService.getBookById(id).subscribe(
        //   (response) => {
        //     this.book = response;
        //   })
        this.loaded = false;
        this.bookService.getBookById(id).subscribe((book) => {
          this.book = book;
          this.loaded = true;
        })
      }
    });
  }
  Like() {
    // this.albumService.updateAlbumTitle(this.book.id, this.newTitle).subscribe(
    //   (response) => {
    //     this.book.likes = response.likes;
    //     this.newTitle = "";
    //   }
    // )
  }
}
