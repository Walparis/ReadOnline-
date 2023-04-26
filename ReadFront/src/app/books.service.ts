import { Injectable } from '@angular/core';
import { Book} from "../interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];
  constructor() { }
}
