import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  constructor(private router: Router) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      const hash = window.location.hash;
      if (!hash) {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
        return;
      }

      // If we have a fragment, attempt to scroll to the element after render.
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          try {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } catch (e) {
            el.scrollIntoView();
          }
        }
      }, 50);
    });
  }
}
