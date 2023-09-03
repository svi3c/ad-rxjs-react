import { useObservableState } from "observable-hooks";
import { count$ } from "./count";

export function CountObservableHook() {
  const count = useObservableState(count$, 0);
  return <>{count}</>;
}
