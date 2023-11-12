import { startExpress } from "./servers/express";
import { startFastify } from "./servers/fastify";

const starters = [startExpress, startFastify];

for (const starter of starters) {
  starter();
}
