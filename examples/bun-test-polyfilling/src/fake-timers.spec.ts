import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "bun:test";
import { useFakeTimers } from "sinon";
import { sleep } from "./sleep";

const clock = useFakeTimers();

beforeEach(() => {
  clock.reset();
});

afterEach(() => {
  clock.restore();
});

describe("fake timers", () => {
  it("should work", async () => {
    const sleeping = sleep(1000);

    clock.tick(1000);

    await sleeping;
  }, 10);
});
