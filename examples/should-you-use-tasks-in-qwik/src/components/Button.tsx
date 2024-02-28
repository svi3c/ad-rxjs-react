import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import styles from "./Button.module.css";

type ButtonProps = QwikIntrinsicElements["button"];

export const Button = component$<ButtonProps>((props) => {
  return (
    <button
      {...props}
      class={[props.class, styles.button]}
      type={props.type ?? "button"}
    >
      <Slot />
    </button>
  );
});
