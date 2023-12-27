import express from "express";
import largeJson from "./fixtures/large-json.json";

export async function startExpress() {
  await new Promise<void>((resolve) =>
    express()
      .use(express.json())
      .get("/", (_, res) => res.send("Hello World!"))
      .get("/json", (_, res) => res.json(largeJson))
      .post("/json", (req, res) =>
        res.send(
          JSON.stringify(req.body).length.toString(),
        ),
      )
      .get("/params/:param", ({ params }, res) =>
        res.send(params.param),
      )
      .listen(9002, resolve),
  );
}
