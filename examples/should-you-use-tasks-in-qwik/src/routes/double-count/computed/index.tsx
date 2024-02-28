import {
  component$,
  useComputed$,
  useSignal,
} from "@builder.io/qwik";
import { Button } from "~/components/Button";

export default component$(() => {
  const count = useSignal(0);
  const doubleCount = useComputed$(() => count.value * 2);

  return (
    <Button onClick$={() => count.value++}>
      {count.value} * 2 = {doubleCount.value}
    </Button>
  );
});
