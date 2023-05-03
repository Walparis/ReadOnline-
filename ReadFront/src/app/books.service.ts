import { Injectable } from '@angular/core';
import { Book, AuthToken} from "../interfaces/interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];
  BASE_URL = "http://127.0.0.1:8000/"
  constructor(private client : HttpClient) { }
  // getVacancy(company_id: number): Observable<Book[]>{
  //   return this.client.get<Book[]>(${this.BASE_URL}/api/books/${book_id}/vacancies)
  // }

  getBooks(): Observable<Book[]>{
    return this.client.get<Book[]>(`${this.BASE_URL}/api/books`)
  }

  getBookById(book_id: number): Observable<Book>{
    return this.client.get<Book>(`${this.BASE_URL}/api/books/${book_id}`)
  }
  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

}
