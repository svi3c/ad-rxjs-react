import { file } from "bun";
import Elysia from "elysia";
// import { largeJson } from "./fixtures/large-json.json";

export async function startElysia() {
  await new Promise((resolve) =>
    new Elysia()
      .get("/", () => "Hello World!")
      .get("/json", () =>
        file("./perf/fixtures/large-json.json"),
      )
      .post(
        "/json",
        ({ body }) => JSON.stringify(body).length,
      )
      .get("/params/:param", ({ params }) => params.param)
      .listen(9001, resolve),
  );
}
