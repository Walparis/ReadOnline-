import { Component, Input } from '@angular/core'

@Component({
  selector: 'links-container',
  templateUrl: 'links-container.component.html',
  styleUrls: ['links-container.component.css'],
})
export class LinksContainer {
  @Input()
  text: string = 'Home'
  @Input()
  text1: string = 'Genres'
  constructor() {}
}
