import { component$, useSignal } from "@builder.io/qwik";
import { ScrollIndicator } from "~/components/ScrollIndicator";

export default component$(() => {
  const scrolled = useSignal(0);
  return (
    <ScrollIndicator
      window:onScroll$={() => {
        scrolled.value =
          scrollY /
          (document.body.scrollHeight - innerHeight);
      }}
      scrolled={scrolled.value}
    />
  );
});
