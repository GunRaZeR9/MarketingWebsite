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
  private _firstRender = true;

  getAnimationState(outlet: RouterOutlet): number | string {
    // On the initial page load there is no previous route to transition from.
    // Returning 'idle' prevents :increment/:decrement from matching, which
    // avoids the position:absolute → cleanup layout shift that causes CLS.
    if (this._firstRender) {
      this._firstRender = false;
      return 'idle';
    }
    return outlet.activatedRouteData['animIndex'] ?? 0;
  }
}
