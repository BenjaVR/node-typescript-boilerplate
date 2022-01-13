import { FastifyPluginAsync } from "fastify";

const health: FastifyPluginAsync = async (fastify) => {
  fastify.get("/ping", async () => {
    await fastify.logToMyCustomServer("Doing ping-pong health check.");
    return "pong!";
  });
};

export default health;
