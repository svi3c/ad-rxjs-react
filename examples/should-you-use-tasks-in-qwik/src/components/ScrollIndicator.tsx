import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import styles from "./ScrollIndicator.module.css";

type ScrollIndicatorProps = {
  scrolled: number;
} & QwikIntrinsicElements["div"];

export const ScrollIndicator =
  component$<ScrollIndicatorProps>(
    ({ scrolled, ...divProps }) => {
      return (
        <div
          {...divProps}
          class={[divProps.class, styles.indicator]}
        >
          <div
            class={styles.bar}
            style={{
              transform: "scaleX(" + scrolled + ")",
            }}
          />
          {(scrolled * 100).toFixed(0)}%
        </div>
      );
    },
  );
