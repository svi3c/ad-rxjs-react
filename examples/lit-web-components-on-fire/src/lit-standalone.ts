import { html, render } from "lit";
import { randomColor } from "./tools";

const template = html`
  <p>Static: 42</p>
  <p>Dynamic: ${42}</p>
  <p
    @mouseenter=${(e: Event) =>
      ((e.target as HTMLParagraphElement).style.background =
        randomColor())}
  >
    Interactive
  </p>
`;

render(template, document.body);
