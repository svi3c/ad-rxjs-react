import { describe, it } from "bun:test";
import { fakeTimers } from "../test/helpers";
import { sleep } from "./sleep";

const clock = fakeTimers();

describe("fakeTimers() helper", () => {
  it("should work", async () => {
    const sleeping = sleep(1000);

    clock.tick(1000);

    await sleeping;
  }, 10);
});
