import { Elysia, t } from "elysia";

const app = new Elysia()
  .post(
    "/a/b/:x",
    ({ params, query, body, headers }) => ({
      concatenated: [
        params.x,
        query.y,
        body.z,
        headers.referer,
      ].join(`,`),
    }),
    {
      params: t.Object({ x: t.Numeric() }),
      query: t.Object({ y: t.String() }),
      body: t.Object({ z: t.String() }),
      headers: t.Object({ referer: t.Literal("a") }),
      response: t.Object({ concatenated: t.String() }),
    },
  )
  .listen(9001);

export type App = typeof app;
