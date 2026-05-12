// ── Counter animation ──────────────────────────────────────────────────────

export interface StatDef {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
}

export const COUNTER_DURATION = 2000;

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function formatStat(def: StatDef, value: number): string {
  return `${def.prefix}${value.toFixed(def.decimals)}${def.suffix}`;
}

export function runCounterAnimation(
  defs: StatDef[],
  onUpdate: (index: number, formatted: string) => void,
  duration = COUNTER_DURATION
): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    defs.forEach((def, i) => onUpdate(i, formatStat(def, def.target)));
    return () => {};
  }

  const startTime = performance.now();
  let rafId = 0;

  const tick = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    defs.forEach((def, i) => {
      onUpdate(i, formatStat(def, def.target * eased));
    });

    if (progress < 1) {
      rafId = requestAnimationFrame(tick);
    }
  };

  rafId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(rafId);
}

// ── Route slide animation ──────────────────────────────────────────────────

import { trigger, transition, style, animate, query, group } from '@angular/animations';

const ROUTE_DURATION = '380ms cubic-bezier(0.4, 0, 0.2, 1)';
const CLEANUP = { position: '', top: '', left: '', width: '', transform: '' };

export const routeSlideAnimation = trigger('routeSlideAnimation', [
  transition('void => idle, idle => *', []),  // no animation on initial page load
  transition(':increment', [
    query(':enter, :leave', [
      style({ position: 'absolute', top: '0', left: '0', width: '100%' })
    ], { optional: true }),
    query(':enter', [style({ transform: 'translateX(100%)' })], { optional: true }),
    group([
      query(':leave', [
        animate(ROUTE_DURATION, style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate(ROUTE_DURATION, style({ transform: 'translateX(0)' }))
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
        animate(ROUTE_DURATION, style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
      query(':enter', [
        animate(ROUTE_DURATION, style({ transform: 'translateX(0)' }))
      ], { optional: true }),
    ]),
    query(':enter', [style(CLEANUP)], { optional: true }),
  ]),
]);
