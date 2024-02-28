import {
  $,
  component$,
  useOnWindow,
  useSignal,
} from "@builder.io/qwik";
import { ScrollIndicator } from "~/components/ScrollIndicator";

export default component$(() => {
  const scrolled = useSignal(0);
  useOnWindow(
    "scroll",
    $(() => {
      scrolled.value =
        scrollY /
        (document.body.scrollHeight - innerHeight);
    }),
  );
  return <ScrollIndicator scrolled={scrolled.value} />;
});
