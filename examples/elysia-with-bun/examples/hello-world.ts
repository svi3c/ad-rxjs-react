import Elysia from "elysia";

const app = new Elysia()
  .get("/", () => "Hello World!")
  .listen(9001);
