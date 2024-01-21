import { promises as fs } from "fs";
import { describe, expect, it, vi } from "vitest";
import { getVersion } from "./version";

const mockReadFile = vi.mocked(fs.readFile);

vi.mock("fs", () => ({
  promises: {
    readFile: vi.fn(async () =>
      JSON.stringify({ version: "1.2.3" }),
    ),
  },
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
