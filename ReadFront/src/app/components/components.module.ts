import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { LinksContainer } from './links-container/links-container.component'
import { SolidButton } from './solid-button/solid-button.component'
import { OutlineButton } from './outline-button/outline-button.component'
import { PlaceCard } from './place-card/place-card.component'
import { Navbar } from './navbar/navbar.component'
import { Hero } from './hero/hero.component'
import { Main } from './main/main.component'
import { Menu } from './menu/menu.component'

@NgModule({
  declarations: [
    LinksContainer,
    SolidButton,
    OutlineButton,
    PlaceCard,
    Navbar,
    Hero,
    Main,
    Menu,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LinksContainer,
    SolidButton,
    OutlineButton,
    PlaceCard,
    Navbar,
    Hero,
    Main,
    Menu,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
