import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing-page.component.css'],
})
export class LandingPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Travel Agency')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Travel Agency',
      },
    ])
  }
}
