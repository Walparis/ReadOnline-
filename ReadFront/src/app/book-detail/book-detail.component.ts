import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../interfaces/interface";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book : Book;
  loaded: boolean;
  ReturnBack(){
    window.location.href = `http://localhost:4200/books`;
  }

  constructor(private route: ActivatedRoute) {
    this.book = {} as Book
    this.loaded = true;
  }
  ngOnInit(): void {



    // this.route.paramMap.subscribe((params) => {
    //   let _id = params.get('id');
    //   if (_id) {
    //     let id = +_id;
    //     this.bookService.getAlbum(id).subscribe(
    //       (response) => {
    //         this.album = response;
    //       })
    //     this.loaded = false;
    //     this.albumService.getAlbum(id).subscribe((album) => {
    //       this.album = album;
    //       this.loaded = true;
    //     })
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
