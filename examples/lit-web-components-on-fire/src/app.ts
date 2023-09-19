import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./async-directives";
import "./reactive-props";

const components = [
  null,
  "my-reactive-props",
  "my-async-directives",
];

@customElement("my-app")
export class MyElement extends LitElement {
  @state() private idx = 0;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 0 auto;
      width: calc(2 / 3 * 100%);
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    button {
      padding: 0.5rem;
      font-weight: bold;
      color: currentColor;
      border: none;
      font-size: 1rem;
      background: var(--color-mariner-500);
    }

    button:hover {
      background: var(--color-mariner-700);
    }

    .container2 {
      padding: 1rem;
      background: var(--color-mariner-900);
      border: 1px solid var(--color-mariner-800);
    }
  `;

  render() {
    const componentName = components[this.idx];

    return html`
      <h1>Web Components with Lit</h1>
      <div class="container">
        <h2>
          Component:
          <strong>
            ${components[this.idx] ?? "No component"}
          </strong>
        </h2>
        <button
          @click=${() =>
            (this.idx = (this.idx + 1) % components.length)}
        >
          Switch
        </button>
      </div>
      ${componentName
        ? html`
            <div class="container2">
              ${document.createElement(componentName)}
            </div>
          `
        : null}
    `;
  }
}
