import { Elysia, t } from "elysia";

const app = new Elysia()
  .post(
    "/a/b/:x",
    ({ params, body, query }) => ({
      concatenated: `${params.x} - ${query.y} - ${body.z}`,
    }),
    {
      params: t.Object({ x: t.Numeric() }),
      query: t.Object({ y: t.String() }),
      body: t.Object({ z: t.String() }),
      response: t.Object({ concatenated: t.String() }),
    },
  )
  .listen(9001);

export type App = typeof app;
