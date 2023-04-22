import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
