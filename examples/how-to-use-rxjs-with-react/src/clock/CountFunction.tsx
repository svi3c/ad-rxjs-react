import { useEffect, useState } from "react";
import { count$ } from "./count";

export function CountFunction() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const sub = count$.subscribe((count) =>
      setCount(count),
    );
    return () => sub.unsubscribe();
  }, []);
  return <>{count}</>;
}
