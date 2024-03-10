import {
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Button } from "~/components/Button";

export default component$(() => {
  const count = useSignal(0);
  const doubleCount = useSignal(0);

  useTask$(({ track }) => {
    track(() => count.value);
    doubleCount.value = count.value * 2;
  });
  return (
    <Button onClick$={() => count.value++}>
      {count.value} * 2 = {doubleCount.value}
    </Button>
  );
});
