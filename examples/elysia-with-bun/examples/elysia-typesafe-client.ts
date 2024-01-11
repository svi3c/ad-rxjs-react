import { edenTreaty } from "@elysiajs/eden";
import type { App } from "./elysia-typesafe-server";

const api = edenTreaty<App>("http://localhost:9001");

const res = await api.a.b[123].post({
  $query: { y: "foo" },
  z: "Hello",
  $headers: { referer: "a" },
});

console.log(
  res.status,
  res.error ? res.error.value : res.data.concatenated,
);
