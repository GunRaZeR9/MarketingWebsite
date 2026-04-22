import { trigger, transition, style, animate, query, group } from '@angular/animations';

const DURATION = '380ms cubic-bezier(0.4, 0, 0.2, 1)';

// Empty-string values tell Angular to remove the inline style after animation,
// returning the element to normal document flow.
const CLEANUP = { position: '', top: '', left: '', width: '', transform: '' };

export const routeSlideAnimation = trigger('routeSlideAnimation', [
  transition(':increment', [
    query(':enter, :leave', [
      style({ position: 'absolute', top: '0', left: '0', width: '100%' })
    ], { optional: true }),
    query(':enter', [style({ transform: 'translateX(100%)' })], { optional: true }),
    group([
      query(':leave', [
        animate(DURATION, style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate(DURATION, style({ transform: 'translateX(0)' }))
      ], { optional: true }),
    ]),
    query(':enter', [style(CLEANUP)], { optional: true }),
  ]),
  transition(':decrement', [
    query(':enter, :leave', [
      style({ position: 'absolute', top: '0', left: '0', width: '100%' })
    ], { optional: true }),
    query(':enter', [style({ transform: 'translateX(-100%)' })], { optional: true }),
    group([
      query(':leave', [
        animate(DURATION, style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate(DURATION, style({ transform: 'translateX(0)' }))
      ], { optional: true }),
    ]),
    query(':enter', [style(CLEANUP)], { optional: true }),
  ]),
]);
