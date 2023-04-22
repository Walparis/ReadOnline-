import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class Hero {
  @Input()
  heading: string = 'Books of every genre'
  @Input()
  Subheading: string = 'Save books to your favourites!'
  constructor() {}
}
