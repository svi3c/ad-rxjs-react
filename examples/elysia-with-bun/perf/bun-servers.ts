import { startElysia } from "./elysia";
import { startExpress } from "./express";
import { startFastify } from "./fastify";
import { startVanilla } from "./vanilla";

const starters = [
  startElysia,
  startExpress,
  startFastify,
  startVanilla,
];

for (const starter of starters) {
  starter();
}
