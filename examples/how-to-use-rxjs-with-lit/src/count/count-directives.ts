import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { observe } from "../directives/observe-directive";
import { count$ } from "./count";

@customElement("count-directive")
export class CountDirective extends LitElement {
  render() {
    return observe(count$);
  }
}
