import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { sleep } from "./sleep";

vi.useFakeTimers();

beforeEach(() => {
  vi.clearAllTimers();
  vi.setSystemTime(0);
});

describe("advanceTimersByTime()", () => {
  it("should advance timers", async () => {
    const sleeping = sleep(1000);

    vi.advanceTimersByTime(1000);

    await sleeping;
    expect(Date.now()).toBe(1000);
  }, 10);
});
