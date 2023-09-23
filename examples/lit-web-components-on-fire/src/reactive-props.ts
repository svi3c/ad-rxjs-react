import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("my-reactive-props")
export class ReactiveProps extends LitElement {
  @state() private a = 0;
  @state() private b = 0;

  render() {
    console.log("ReactiveProps rendered");
    return html`
      <p>a: ${this.a}</p>
      <p>b: ${this.b}</p>
      <button
        @click=${() => {
          this.a++;
          this.b = this.a * this.a;
        }}
      >
        Change
      </button>
    `;
  }
}
