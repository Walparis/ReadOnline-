import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class Menu {
  @Input()
  Logo: string = 'Travel'
  @Input()
  text: string = 'Follow us on '
  @Input()
  text1: string = 'Help'
  @Input()
  link_text: string = 'https://example.com'
  @Input()
  text2: string = 'Authors'
  @Input()
  link_text1: string = 'https://example.com'
  @Input()
  text3: string = 'Genres'
  @Input()
  link_text2: string = 'https://example.com'
  @Input()
  Link: string = 'Collections'
  @Input()
  link_Link: string = 'https://example.com'
  @Input()
  text4: string = 'About us'
  @Input()
  link_text3: string = 'https://example.com'
  @Input()
  text5: string = 'FAQ'
  @Input()
  link_text4: string = 'https://example.com'
  @Input()
  text6: string = 'Terms and conditions'
  @Input()
  link_text5: string = 'https://example.com'
  @Input()
  text7: string = 'Contact'
  @Input()
  link_text6: string = 'https://example.com'
  constructor() {}
}
