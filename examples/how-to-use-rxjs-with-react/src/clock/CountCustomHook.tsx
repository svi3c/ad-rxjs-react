import { useEffect, useState } from "react";
import { Observable } from "rxjs";
import { count$ } from "./count";

export function CountCustomHook() {
  const count = useObservable(count$, 0);
  return <>{count}</>;
}

function useObservable<T>(
  obs$: Observable<T>,
  initialState: T,
) {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const sub = obs$.subscribe((count) => setState(count));
    return () => sub.unsubscribe();
  }, [obs$]);
  return state;
}
