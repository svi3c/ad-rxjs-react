import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { until } from "lit/directives/until.js";

@customElement("my-async-directives")
export class AsyncDirectives extends LitElement {
  #async = new Promise((resolve) =>
    setTimeout(() => resolve("resolved"), 2000),
  );

  render() {
    console.log("AsyncDirectives rendered");
    return html`
      ${until(this.#async, html`<span>Loading...</span>`)}
    `;
  }
}
