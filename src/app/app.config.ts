import { ApplicationConfig, provideBrowserGlobalErrorListeners, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withPreloading, Route, PreloadingStrategy } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Observable, of } from 'rxjs';

import { routes } from './app.routes';
import { ScrollService } from './core/services/scroll.service';

export class QuicklinkStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data?.['preload']) {
      return load();
    }
    return of(null);
  }
}

export function initScroll(scroll: ScrollService) {
  return () => {
    /* service constructed to subscribe to router events */
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(QuicklinkStrategy)),
    provideAnimationsAsync(),
    { provide: APP_INITIALIZER, useFactory: initScroll, deps: [ScrollService], multi: true }
  ],
};
