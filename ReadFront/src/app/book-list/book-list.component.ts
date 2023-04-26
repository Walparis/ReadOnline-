import { Component } from '@angular/core';
import { Book } from '../../interfaces/interface';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books : Book[]= [];
}
