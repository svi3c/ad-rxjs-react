import { afterEach, beforeEach } from "bun:test";
import { useFakeTimers } from "sinon";

export function fakeTimers() {
  const clock = useFakeTimers();
  beforeEach(() => {
    clock.reset();
  });
  afterEach(() => {
    clock.restore();
  });
  return clock;
}
