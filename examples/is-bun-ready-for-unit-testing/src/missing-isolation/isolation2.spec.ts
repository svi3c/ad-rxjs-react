import { describe, expect, it } from "vitest";
import { foo } from "./module-to-mock";

describe("test isolation", () => {
  it("should not work yet", async () => {
    expect(foo).toBe("baz");
  });
});
