import { shareReplay, tap, timer } from "rxjs";

export const count$ = timer(0, 1000).pipe(
  tap({
    next: (x) => console.log(x),
    subscribe: () => console.log("subscribe"),
    unsubscribe: () => console.log("unsubscribe"),
  }),
  shareReplay(1),
);
