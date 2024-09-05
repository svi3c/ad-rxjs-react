import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("test-component")
export class TestComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 10px;
      border: 1px solid currentColor;
    }
  `;

  render() {
    return html`
      Component is registered.
      <slot></slot>
    `;
  }
}
