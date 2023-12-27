import Elysia from "elysia";

const plugin = (prefix: string) =>
  new Elysia({ prefix }).get("/", () => "Hello World!");

new Elysia().use(plugin("/a")).listen(9001);
