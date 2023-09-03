import { LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Subscription } from "rxjs";
import { count$ } from "./count";

@customElement("count-lifecycle")
export class CountLifecycle extends LitElement {
  @state() private count = 0;
  #sub?: Subscription;

  render() {
    return this.count;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#sub = count$.subscribe((count) => {
      this.count = count;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#sub?.unsubscribe();
  }
}
