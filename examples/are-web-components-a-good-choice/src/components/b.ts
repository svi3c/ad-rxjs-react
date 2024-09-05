import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-b")
export class CompB extends LitElement {
  render() {
    return html`<my-a></my-a>`;
  }
}
