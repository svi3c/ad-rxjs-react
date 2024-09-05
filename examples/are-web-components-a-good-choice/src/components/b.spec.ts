import { describe, expect, it } from "bun:test";
import { html, render } from "lit";
import "./b";
import type { CompB } from "./b";

describe("should import dependencies", () => {
  it("should import html from lit", async () => {
    render(html`<my-b></my-b>`, window.document.body);

    const b = document.body.querySelector<CompB>("my-b")!;
    await b.updateComplete;
    const a = b.shadowRoot!.querySelector("my-a");

    expect(a!.shadowRoot).not.toBeNull();
  });
});
