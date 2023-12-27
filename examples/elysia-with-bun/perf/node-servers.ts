import { startExpress } from "./express";
import { startFastify } from "./fastify";

const starters = [startExpress, startFastify];

for (const starter of starters) {
  starter();
}
