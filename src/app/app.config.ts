import { ApplicationConfig, provideBrowserGlobalErrorListeners, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { ScrollService } from './core/services/scroll.service';

export function initScroll(scroll: ScrollService) {
  return () => {
    /* service constructed to subscribe to router events */
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    { provide: APP_INITIALIZER, useFactory: initScroll, deps: [ScrollService], multi: true }
  ],
};
