import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
})
export class Main {
  @Input()
  heading: string = 'Books'
  @Input()
  text: string = 'Recommended'
  constructor() {}
}
