import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  text3: string = 'Home'
  @Input()
  text5: string = 'Search a Book'
  @Input()
  text4: string = 'About'
  @Input()
  text6: string = 'Contact'
  @Input()
  Logo: string = 'Travel'
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'Follow us on '
  @Input()
  textinput_placeholder: string = 'Search a Book'
  constructor() {}
}
