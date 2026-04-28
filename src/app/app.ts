import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { CookieConsentComponent } from './shared/components/cookie-consent/cookie-consent.component';
import { routeSlideAnimation } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CookieConsentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeSlideAnimation],
})
export class App {
  getAnimationState(outlet: RouterOutlet): number {
    return outlet.activatedRouteData['animIndex'] ?? 0;
  }
}
