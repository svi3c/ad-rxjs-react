import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "bun:test";
import { useFakeTimers, type SinonFakeTimers } from "sinon";

let clock: SinonFakeTimers;

beforeEach(() => {
  clock = useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

describe("fake timers", () => {
  it("should work", async () => {
    const sleeping = sleep(1000);

    clock.tick(1000);
    await sleeping;
  }, 100);
});

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
