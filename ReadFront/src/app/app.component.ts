import { Component } from '@angular/core';
import { Book } from '../interfaces/interface';
import {BooksService} from "./books.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReadFront';
  newCost: number;
  logged: boolean = false;
  username:string = '';
  password: string = '';
  constructor(private bookService: BooksService) { }

  login(){
    this.bookService.login(this.username, this.password).subscribe((data)=>{
      localStorage.setItem('token', data.token)
      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout(){
    localStorage.removeItem('token');
    //Request to the Django
    this.logged = false;
  }


}
