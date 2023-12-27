import { describe, expect, it } from "bun:test";
import largeJson from "./perf/fixtures/large-json.json";

const RUNS = 10_000;

const base: Record<string, string> = {
  elysia: `http://localhost:9001`,
  express: `http://localhost:9002`,
  fastify: `http://localhost:9003`,
  vanilla: `http://localhost:9004`,
};

describe.each(Object.entries(base))("%s", (_, url) => {
  it("index route", async () => {
    for (let i = 0; i < RUNS; i++) {
      const res = await fetch(`${url}`);
      const text = await res.text();
      expect(text).toBe("Hello World!");
    }
  }, 10_000);

  it("path params", async () => {
    for (let i = 0; i < RUNS; i++) {
      const r = random();
      const res = await fetch(`${url}/params/${r}`);
      const text = await res.text();
      expect(text).toBe(r);
    }
  }, 10_000);

  it("GET json", async () => {
    for (let i = 0; i < RUNS; i++) {
      const res = await fetch(`${url}/json`);
      const parsed = await res.json();
      expect(parsed).toEqual(largeJson);
    }
  }, 100_000);

  it("POST json", async () => {
    const json = JSON.stringify(largeJson);
    for (let i = 0; i < RUNS; i++) {
      const res = await fetch(`${url}/json`, {
        method: "POST",
        body: json,
        headers: { "Content-Type": "application/json" },
      });
      const parsed = await res.text();
      expect(parsed).toEqual(json.length.toString());
    }
  }, 100_000);
});

function random() {
  return Math.random().toString(36).slice(2);
}
