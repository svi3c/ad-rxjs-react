import {
  component$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { ScrollIndicator } from "~/components/ScrollIndicator";

export default component$(() => {
  const scrolled = useSignal(0);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const onScroll = () => {
      const scrollRangeY =
        document.body.scrollHeight - innerHeight;
      scrolled.value = scrollY / scrollRangeY;
    };
    window.addEventListener("scroll", onScroll);
    cleanup(() => {
      window.removeEventListener("scroll", onScroll);
    });
  });
  return <ScrollIndicator scrolled={scrolled.value} />;
});
