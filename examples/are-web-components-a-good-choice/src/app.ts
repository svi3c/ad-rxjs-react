import "@lit-labs/ssr-client/lit-element-hydrate-support.js";
import { createRouter } from "esroute";
import { render, TemplateResult } from "lit";

createRouter<TemplateResult>({
  routes: {
    "": ({}, child) => child ?? page(import("./pages")),
    registration: {
      success: () =>
        page(import("./pages/registration/success")),
      fail: () => page(import("./pages/registration/fail")),
    },
    slotting: {
      success: () =>
        page(import("./pages/slotting/success")),
      fail: () => page(import("./pages/slotting/fail")),
    },
  },
  noClick: true,
  onResolve: ({ value }) => {
    render(value, document.body);
    // Normally we would use SSR to provide the initial HTML,
    // but for this example, we'll use setHTMLUnsafe(), since
    // this is required to get declarative shadow DOM to work.
    document.body.setHTMLUnsafe(document.body.innerHTML);
  },
}).init();

async function page(
  promise: Promise<{ default: TemplateResult }>,
) {
  const { default: page } = await promise;
  return page;
}

document.body.addEventListener("click", (event) => {
  if (
    (event.target as HTMLElement)?.id ===
    "load-slotting-module"
  )
    import("./components/slotting");
});
