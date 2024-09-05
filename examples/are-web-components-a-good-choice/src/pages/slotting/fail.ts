import { html } from "lit";

export default html`
  <h1>Naive slotting</h1>
  <test-component>
    <b>Slotted content</b>
  </test-component>
  <button id="load-slotting-module">Load Module</button>
`;
