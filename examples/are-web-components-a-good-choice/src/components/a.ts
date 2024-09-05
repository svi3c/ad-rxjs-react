import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-a")
export class CompA extends LitElement {
  render() {
    return html`a rendered`;
  }
}
