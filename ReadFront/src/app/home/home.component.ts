
import {Component, ElementRef, ViewChild} from '@angular/core';
import { Book} from "../../interfaces/interface";
import {map} from "rxjs/operators";
import {books} from "../fakedb";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Book[] = [];

  // books = books.reverse();
  // @ViewChild('searchbar') searchbar: ElementRef;
  // searchText = '';
  //
  // toggleSearch: boolean = false;
  constructor() {

  }

  // openSearch() {
  //   this.toggleSearch = true;
  //   this.searchbar.nativeElement.focus();
  // }
  // searchClose() {
  //   this.searchText = '';
  //   this.toggleSearch = false;
  // }
}


