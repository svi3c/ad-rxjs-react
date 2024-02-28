import { component$, useSignal } from "@builder.io/qwik";
import { Button } from "~/components/Button";

export default component$(() => {
  const count = useSignal(0);
  const doubleCount = useSignal(0);

  return (
    <Button
      onClick$={() => {
        count.value++;
        doubleCount.value = count.value * 2;
      }}
    >
      {count.value} * 2 = {doubleCount.value}
    </Button>
  );
});
