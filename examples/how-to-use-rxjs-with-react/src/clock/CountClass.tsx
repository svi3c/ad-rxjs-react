import React from "react";
import { Subscription } from "rxjs";
import { count$ } from "./count";

export class CountClass extends React.Component {
  state = { count: 0 };
  #sub: Subscription | null = null;

  componentDidMount(): void {
    this.#sub = count$.subscribe((count) =>
      this.setState({ count }),
    );
  }

  componentWillUnmount(): void {
    this.#sub?.unsubscribe();
  }

  render() {
    return <>{this.state.count}</>;
  }
}
