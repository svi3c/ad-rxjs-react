import { describe, expect, it, mock } from "bun:test";
import { getVersion } from "./version";

const mockReadFile = mock(async () =>
  JSON.stringify({ version: "1.2.3" }),
);

mock.module("fs", () => ({
  promises: { readFile: mockReadFile },
}));

describe("version()", () => {
  it("should return the version", async () => {
    const version = await getVersion();

    expect(mockReadFile).toHaveBeenCalledWith(
      "package.json",
      "utf-8",
    );
    expect(version).toBe("1.2.3");
  });
});
