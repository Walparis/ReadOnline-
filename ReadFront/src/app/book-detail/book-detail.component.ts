import { Component, OnInit } from '@angular/core';
import {Book} from "../../interfaces/interface";
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../books.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  // books: Book[] = [];
  // book: Book = {
  //   id : '1',
  //   image : "https://i.dummyjson.com/data/products/1/4.jpg",
  //   name : "b1",
  //   author : "a1",
  //   genre : "g1",
  //   description : "cakbhkcbakcbdkbc",
  //   likes : 0,
  //   cost : 250000
  // };
  loaded = true;
  constructor(homeComponent : HomeComponent) {
  }
  ReturnBack(){
    window.location.href = `http://localhost:4200/home`;
  }
  // book : Book;
  // loaded: boolean;
  // constructor(private route: ActivatedRoute, private bookService : BooksService) {
  //   this.book = {} as Book
  //   this.loaded = true;
  // }
  ngOnInit(): void {



    // this.route.paramMap.subscribe((params) => {
    //   let _id = params.get('id');
    //   if (_id) {
    //     let id = +_id;
    //     // this.bookService.getAlbum(id).subscribe(
    //     //   (response) => {
    //     //     this.album = response;
    //     //   })
    //     this.loaded = false;
    //     this.albumService.getAlbum(id).subscribe((album) => {
    //       this.album = album;
    //       this.loaded = true;
    //     })
    //
    //   }
    // });


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
