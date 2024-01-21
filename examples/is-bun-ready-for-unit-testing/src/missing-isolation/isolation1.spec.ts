import { mock } from "bun:test";
import { describe, expect, it } from "vitest";
import { foo } from "./module-to-mock";

mock.module("./module-to-mock", () => ({
  foo: "baz",
}));

describe("mock.module()", () => {
  it("should mock module", async () => {
    expect(foo).toBe("baz");
  });
});
