import { Component } from '@angular/core';
import { Book } from '../interfaces/interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReadFront';
  books : Book[] =[];
  constructor() { }
}
