import { startElysia } from "./servers/elysia";
import { startExpress } from "./servers/express";
import { startFastify } from "./servers/fastify";
import { startVanilla } from "./servers/vanilla";

const starters = [
  startElysia,
  startExpress,
  startFastify,
  startVanilla,
];

for (const starter of starters) {
  starter();
}
