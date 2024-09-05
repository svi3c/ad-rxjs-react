import { html } from "lit";

export default html`
  <h1>Slotting with Declarative Shadow DOM</h1>
  <test-component>
    <template shadowrootmode="open">
      <style>
        :host {
          display: block;
          padding: 10px;
          border: 1px solid currentColor;
        }
      </style>
      <!-- Lit hydration does not correctly work with this manual copy
       of the rendered shadow DOM, but it should suffice for this showcase -->
      Component is registered.
      <slot></slot>
    </template>
    <b>Slotted content</b>
  </test-component>
  <button id="load-slotting-module">Load Module</button>
`;
