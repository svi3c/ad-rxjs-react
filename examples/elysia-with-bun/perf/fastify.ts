import fastify from "fastify";
import largeJson from "./fixtures/large-json.json";

export async function startFastify() {
  await fastify()
    .get("/", (_, reply) => reply.send("Hello World!"))
    .get("/json", (_, reply) => reply.send(largeJson))
    .post("/json", ({ body }, reply) =>
      reply.send(JSON.stringify(body).length),
    )
    .get<{ Params: { param: string } }>(
      "/params/:param",
      ({ params }, reply) => reply.send(params.param),
    )
    .listen({ port: 9003 });
}
