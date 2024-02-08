import { describe, expect, it } from "bun:test";
import { fakeTimers } from "../test/helpers/fake-timers";
import { sleep } from "./sleep";

const clock = fakeTimers();

describe("tick()", () => {
  it("should advance timers", async () => {
    const sleeping = sleep(1000);

    clock.tick(1000);

    await sleeping;
    expect(Date.now()).toBe(1000);
  }, 10);
});
