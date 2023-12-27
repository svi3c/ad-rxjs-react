import Elysia from "elysia";

const plugin = new Elysia().get("/a", () => "Hello World!");

new Elysia().use(plugin).listen(9001);
